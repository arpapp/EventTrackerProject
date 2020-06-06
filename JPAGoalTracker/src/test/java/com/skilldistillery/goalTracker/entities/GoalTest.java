package com.skilldistillery.goalTracker.entities;

import static org.junit.jupiter.api.Assertions.*;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class GoalTest {
	
	private static EntityManagerFactory emf;
	private EntityManager em;
	private Goal goal;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("GoalTrackerPU");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		goal = em.find(Goal.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		goal = null;
	}

	@Test
	void test() {
		assertNotNull(goal);
		assertEquals("exercise", goal.getName());
		assertEquals("https://i.imgur.com/cxt6Mw7.png", goal.getStickerUrl());
		assertEquals(false, goal.isAchieved());
		assertEquals("2020-06-05T09:26", goal.getCreateDate().toString());
		assertEquals("physical health", goal.getCategory());
	}

}
