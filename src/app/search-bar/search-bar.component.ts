import { Component } from '@angular/core';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  // 
  toggleActive = false;

  // constructor(private sharedService: SharedService) {}

  // ngOnInit(): void {
  //   this.sharedService.toggleActive$.subscribe(value => {
  //     this.toggleActive = value;
  //   });
  // }

  onSearch(event: KeyboardEvent): void {
    const target = event.target as HTMLInputElement;
    const query = target.value.trim();
    if (query) {
      console.log('Search initiated for:', query);
      // Add API call or emit event for search functionality
    }
  }

  onVoiceSearch(): void {
    console.log('Voice search initiated');
    // Add logic for voice search integration
  }

}
