package com.skilldistillery.goalTracker.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.goalTracker.entities.Goal;
import com.skilldistillery.goalTracker.services.GoalService;

@RestController
@RequestMapping("api")
public class GoalController {
	
	@Autowired
	private GoalService service;
	
	@GetMapping(path = "goals")
	public List<Goal> findAll(){
		return service.findAllGoals();
	}
	
	@GetMapping(path = "goals/{goalId}")
	public Goal findGoalById(@PathVariable int goalId, HttpServletResponse response) {
		Goal goal = service.findGoalById(goalId);
		if (goal == null) {
			response.setStatus(404);
		}
		return goal;
	}
	
	@PostMapping(path = "goals")
	public Goal createGoal(@RequestBody Goal goal, HttpServletRequest request, HttpServletResponse response) {
		try {
			goal = service.createGoal(goal);
			response.setStatus(201);
			StringBuffer url = request.getRequestURL();
			url.append("/").append(goal.getId());
			response.setHeader("Location", url.toString());
		} catch (Exception e) {
			response.setStatus(400);
			e.printStackTrace();
			goal =  null;
		}
		return goal;
	}
	
	@PutMapping(path = "goals/{goalId}")
	public Goal updateGoal(@PathVariable int goalId, @RequestBody Goal goal, HttpServletRequest request, HttpServletResponse response) {
		
		 try {
			goal = service.updateGoal(goal, goalId);
			if(goal == null) {
				response.setStatus(404);
			}
		} catch (Exception e) {
			response.setStatus(400);
			e.printStackTrace();
			goal = null;
		}
		
		return goal;
	}
	
	@DeleteMapping(path = "goals/{goalsId}")
	public void deleteGoal(@PathVariable int goalsId, HttpServletResponse response) {
		try {
			if(service.deleteGoal(goalsId)) {
				response.setStatus(204);
			}
			else {
				response.setStatus(404);
			}
		} catch (Exception e) {
			e.printStackTrace();
			response.setStatus(409);
		}
	}
	
	@GetMapping(path = "goals/search/{keyword}")
	public List<Goal> findByKeyword(@PathVariable String keyword){
		return service.findByKeyword(keyword);
	}

}
