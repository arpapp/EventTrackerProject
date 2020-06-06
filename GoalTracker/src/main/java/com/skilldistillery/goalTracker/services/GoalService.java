package com.skilldistillery.goalTracker.services;

import java.util.List;

import com.skilldistillery.goalTracker.entities.Goal;

public interface GoalService {
	
	List<Goal> findAllGoals();
	Goal findGoalById(int id);
	Goal createGoal(Goal goal);
	Goal updateGoal(Goal goal, int id);
	boolean deleteGoal(int id);

}
