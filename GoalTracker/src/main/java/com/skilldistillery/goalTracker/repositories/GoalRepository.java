package com.skilldistillery.goalTracker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.skilldistillery.goalTracker.entities.Goal;

@Repository
public interface GoalRepository extends JpaRepository<Goal, Integer> {

}
