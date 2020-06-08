package com.skilldistillery.goalTracker.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.goalTracker.entities.Goal;
import com.skilldistillery.goalTracker.repositories.GoalRepository;

@Service
public class GoalServiceImpl implements GoalService {
	
	@Autowired
	private GoalRepository repo;

	@Override
	public List<Goal> findAllGoals() {
		return repo.findAll();
	}

	@Override
	public Goal findGoalById(int id) {
		Optional <Goal> goalOpt = repo.findById(id);
		Goal goal = null;
		if(goalOpt.isPresent()) {
			 goal = goalOpt.get();
		}
		return goal;
	}

	@Override
	public Goal createGoal(Goal goal) {
		repo.saveAndFlush(goal);
		return goal;
	}

	@Override
	public Goal updateGoal(Goal goal, int id) {
		Optional<Goal> goalOpt = repo.findById(id);
		Goal managedGoal = null;
		
		if(goalOpt.isPresent()) {
			managedGoal = goalOpt.get();
			
			managedGoal.setAchieved(goal.isAchieved());
			managedGoal.setCategory(goal.getCategory());
			managedGoal.setDescription(goal.getDescription());
			managedGoal.setName(goal.getName());
			managedGoal.setStickerUrl(goal.getStickerUrl());
			repo.saveAndFlush(managedGoal);
			
		}
		return managedGoal;
	}

	@Override
	public boolean deleteGoal(int id) {
		Optional<Goal> goalOpt = repo.findById(id);
		if(goalOpt.isPresent()) {
			Goal toDelete = goalOpt.get();
			repo.delete(toDelete);
			return true;
		}
		return false;
	}

	@Override
	public List<Goal> findByKeyword(String keyword) {
		
		List<Goal> goals = repo.findByCategoryLikeOrNameLikeOrDescriptionLike(keyword, keyword, keyword);
		
		return goals;
	}

}
