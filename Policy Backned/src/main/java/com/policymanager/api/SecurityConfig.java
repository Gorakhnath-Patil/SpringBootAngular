package com.policymanager.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.policymanager.api.service.MyUserDetailsService;

@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	@Autowired
	private MyUserDetailsService myUserDetailsService;

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.authenticationProvider(getDBAuth());

	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		/* Using http, I will define security of my api(s) on the basis of roles. */
		http.authorizeRequests()
		.antMatchers("app/user/login").permitAll()
		.antMatchers("app/user/details").permitAll()
		.antMatchers("app/customer/add").permitAll()
		.antMatchers("app/customer/one").permitAll()
		.antMatchers("app/customer/policy/exp").permitAll()
		.antMatchers("app/vendor/one").permitAll()
		.anyRequest().permitAll()
		.and()
		.httpBasic()
		.and()
		.csrf().disable();	
	}

	@Bean
	public PasswordEncoder getPasswordEncoder() {
		return new BCryptPasswordEncoder();
	}

	public DaoAuthenticationProvider getDBAuth() {
		DaoAuthenticationProvider dao = new DaoAuthenticationProvider();

		dao.setPasswordEncoder(getPasswordEncoder());

		dao.setUserDetailsService(myUserDetailsService);
		return dao;
	}
}
