package com.Visualization.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Visualization.entity.VisualizationEntity;
import com.Visualization.repository.VisualizationRepository;

@Service
public class VisualizationService {
	
	@Autowired
	private VisualizationRepository visualizationRepository;

	public List<VisualizationEntity> getAll() {
		return this.visualizationRepository.findAll();
	}

}
