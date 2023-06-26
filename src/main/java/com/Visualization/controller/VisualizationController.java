package com.Visualization.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Visualization.entity.VisualizationEntity;
import com.Visualization.service.VisualizationService;


@RestController
@CrossOrigin("*")
@RequestMapping("/visual")
public class VisualizationController {
	@Autowired
	private VisualizationService visualizationService;
	
	@GetMapping("/getAll")
	public List<VisualizationEntity> getAll() {
		return this.visualizationService.getAll();
	}

}
