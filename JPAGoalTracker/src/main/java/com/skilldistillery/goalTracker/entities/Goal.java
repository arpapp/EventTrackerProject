package com.skilldistillery.goalTracker.entities;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.CreationTimestamp;

@Entity
public class Goal {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String name;
	
	private String description;
	
	@Column(name = "sticker_url")
	private String stickerUrl;
	
	private boolean achieved;
	
	@CreationTimestamp
	@Column(name = "create_date")
	private LocalDateTime createDate;
	
	private String category;
	
	
	public Goal() {
		super();
	}
	
	
	public Goal(int id, String name, String description, String stickerUrl, boolean achieved, LocalDateTime createDate,
			String category) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.stickerUrl = stickerUrl;
		this.achieved = achieved;
		this.createDate = createDate;
		this.category = category;
	}


	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	
	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public String getStickerUrl() {
		return stickerUrl;
	}


	public void setStickerUrl(String stickerUrl) {
		this.stickerUrl = stickerUrl;
	}


	public boolean isAchieved() {
		return achieved;
	}


	public void setAchieved(boolean achieved) {
		this.achieved = achieved;
	}


	public LocalDateTime getCreateDate() {
		return createDate;
	}


	public void setCreateDate(LocalDateTime createDate) {
		this.createDate = createDate;
	}


	public String getCategory() {
		return category;
	}


	public void setCategory(String category) {
		this.category = category;
	}


	@Override
	public String toString() {
		return "Goal [id=" + id + ", name=" + name + ", description=" + description + ", stickerUrl=" + stickerUrl
				+ ", achieved=" + achieved + ", createDate=" + createDate + ", category=" + category + "]";
	}


	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (achieved ? 1231 : 1237);
		result = prime * result + ((category == null) ? 0 : category.hashCode());
		result = prime * result + ((createDate == null) ? 0 : createDate.hashCode());
		result = prime * result + ((description == null) ? 0 : description.hashCode());
		result = prime * result + id;
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		result = prime * result + ((stickerUrl == null) ? 0 : stickerUrl.hashCode());
		return result;
	}


	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Goal other = (Goal) obj;
		if (achieved != other.achieved)
			return false;
		if (category == null) {
			if (other.category != null)
				return false;
		} else if (!category.equals(other.category))
			return false;
		if (createDate == null) {
			if (other.createDate != null)
				return false;
		} else if (!createDate.equals(other.createDate))
			return false;
		if (description == null) {
			if (other.description != null)
				return false;
		} else if (!description.equals(other.description))
			return false;
		if (id != other.id)
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		if (stickerUrl == null) {
			if (other.stickerUrl != null)
				return false;
		} else if (!stickerUrl.equals(other.stickerUrl))
			return false;
		return true;
	}


	
	
	
}
