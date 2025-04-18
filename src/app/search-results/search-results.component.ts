import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
interface Product{
  id:number;
  title:string;
  category:string;
  price:number;
  businessType:string;
}

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css'
})
export class SearchResultsComponent implements OnInit {
  isHovered=false;
  searchQuery: string = '';
  results: Product[] = [];
  filteredResults: Product[] = [];

  // Example filter model
  filters = {
    category: '',
    priceRange: '', // Format: 'min-max', e.g., '0-100'
    businessTypes:{
      manufacturer:false,
      exporter:false,
      wholesaler:false,
      retailer:false
    }
  };

  // Dummy data for demonstration
  allResults: Product[] = [
    { id: 1, title: 'Product 1', category: 'Category A', price: 50 ,businessType:'Manufacturer'},
    { id: 2, title: 'Product 2', category: 'Category B', price: 150,businessType:'Manufacturer' },
    { id: 3, title: 'Product 3', category: 'Category A', price: 90, businessType:'Manufacturer'},
    { id: 4, title: 'Product 4', category: 'Category B', price: 250, businessType:'Manufacturer' }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Retrieve search query from URL parameters (e.g., /search-results?query=example)
    this.route.queryParams.subscribe(params => {
      this.searchQuery = params['query'] || '';
      this.loadResults();
    });
  }

  loadResults(): void {
    // TODO: Replace with actual API call/search logic
    // For now, we filter the dummy data based on the search query
    this.results = this.allResults.filter(item =>
      item.title.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
    // Apply any filters that are set
    this.applyFilters();
  }

  onFilterChange(): void {
    // Whenever a filter changes, update the displayed results
    this.applyFilters();
  }

  applyFilters(): void {
    // Start with the results based on search query
    this.filteredResults = this.results.filter(item => {
      let matchesCategory = true;
      let matchesPrice = true;

      if (this.filters.category) {
        matchesCategory = item.category === this.filters.category;
      }

      if (this.filters.priceRange) {
        const [min, max] = this.filters.priceRange.split('-').map(Number);
        matchesPrice = item.price >= min && item.price <= max;
      }

      return matchesCategory && matchesPrice;
    });
  }
}
