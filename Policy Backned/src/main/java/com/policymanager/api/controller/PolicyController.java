package com.policymanager.api.controller;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.policymanager.api.dto.PolicyDetailDto;
import com.policymanager.api.model.CustPolicy;
import com.policymanager.api.model.Customer;
import com.policymanager.api.model.Policy;
import com.policymanager.api.model.Vendor;
import com.policymanager.api.repository.CustomerRepository;
import com.policymanager.api.repository.PolicyRepository;
import com.policymanager.api.repository.VendorRepository;
import com.policymanager.api.service.PolicyService;

@RestController
@RequestMapping("app/policy")
@CrossOrigin(origins = { "http://localhost:1929" })
public class PolicyController {
	@Autowired
	private PolicyService policyService;
	@Autowired
	private PolicyRepository policyRepository;
	@Autowired
	private CustomerRepository customerRepository;

	@Autowired
	private VendorRepository vendorRepository;

	@PostMapping("/add")
	public Policy addPolicy(@RequestBody Policy policy) {
		return policyService.addPolicy(policy);
	}

	@GetMapping("/all")
	public List<Policy> getAllPolicy() {

		return policyRepository.findAll();

	}

	@GetMapping("pending/{status}")
	public List<Policy> getAllPendingPolicies(@PathVariable("status") String status) {
		// status="PENDING";
		List<Policy> list = policyRepository.getAllPendingPolicies(status);
		return list;
	}

	/* policy with category */
	@GetMapping("/category")
	public List<Policy> getPolicyByCategory(@RequestParam("category") String category) {

		return policyService.getPolicyByCategory(category);
	}

	@GetMapping("/{status}")
	public List<Policy> getPolicyListByStatus(@PathVariable("status") String status) {

		List<Policy> list = policyRepository.getPolicyListByStatus(status);
		return list;
	}

	@PutMapping("/update/status/{id}/{status}")
	public void updatePolicyStatus(@PathVariable("status") String status, @PathVariable("id") Long id) {

		Policy policy = policyRepository.findById(id).orElseThrow(null);
		policy.setStatus(status);
		policyRepository.save(policy);
	}

	@GetMapping("/life")
	public List<Policy> getPolicyByCategoryLife() {

		return policyService.getPolicyByCategoryLife();
	}

	@GetMapping("/cust-policy/all")
	public List<PolicyDetailDto> getAllCustPolicy(Principal principal) {

		String username = principal.getName();
		Customer customerDB = customerRepository.getByUsername(username);

		List<PolicyDetailDto> detailList = new ArrayList<>();
		List<CustPolicy> list = customerDB.getCustPolicy();
		for (CustPolicy cp : list) {

			Long id = cp.getPolicyId();
			Optional<Policy> optionalP = policyRepository.findById(id);
			if (!optionalP.isPresent())
				throw new RuntimeException("Policy ID Invalid");
			Policy policy = optionalP.get();

			List<PolicyDetailDto> listDto = PolicyDetailDto.convertToDto(policy, cp.getStartDate(), cp.getEndDate(),
					cp.getMaturityAmount(), cp.getTermAmount());
			detailList.addAll(listDto);

		}
		return detailList;
	}

	@GetMapping("/health")
	public List<Policy> getPolicyByCategoryHealth() {

		return policyService.getPolicyByCategoryHealth();
	}

}
