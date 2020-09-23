package com.fullstack.employee.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.fullstack.employee.models.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
