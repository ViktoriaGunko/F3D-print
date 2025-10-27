import { Component } from '@angular/core';
interface PriceItem {
  title: string;
  description: string;
  image?: string;
  price?: string;
}
@Component({
  selector: 'app-prices-and-services',
  templateUrl: './prices-and-services.html',
  styleUrls: ['./prices-and-services.component.scss']
})
export class PricesAndServicesComponent {
  standardMaterials: PriceItem[] = [
    { title: 'Матеріал ABS', description: 'Від 9 грн за грам', image: 'assets/images/hero1.png'  },
    { title: 'Матеріал PLA', description: 'Від 9 грн за грам', image: 'assets/images/hero1.png' },
    { title: 'Матеріал PETG', description: 'Від 9 грн за грам', image: 'assets/images/hero1.png'  },
    { title: 'Матеріал Nylon', description: 'Від 9 грн за грам', image: 'assets/images/hero1.png'  },
    { title: 'Матеріал ASA', description: 'Від 9 грн за грам', image: 'assets/images/hero1.png'  }
  ];

  flexibleMaterials: PriceItem[] = [
    { title: 'Матеріал TPU', description: 'Від 9 грн за грам', image: 'assets/images/hero1.png' },
    { title: 'Матеріал TPE', description: 'Від 9 грн за грам', image: 'assets/images/hero1.png' },
    { title: 'Матеріал Flex ABS', description: 'Від 9 грн за грам', image: 'assets/images/hero1.png' }
  ];

  strongMaterials: PriceItem[] = [
    { title: 'Матеріал Carbon ABS', description: 'Від 9 грн за грам', image: 'assets/images/hero1.png' },
    { title: 'Матеріал Nylon CF', description: 'Від 9 грн за грам', image: 'assets/images/hero1.png' },
    { title: 'Матеріал PC', description: 'Від 9 грн за грам', image: 'assets/images/hero1.png' }
  ];

  otherServices: PriceItem[] = [
    { title: '3D моделювання', description: 'Ціна залежить від часу та складності моделювання', price: 'Від 300 грн', image: 'assets/images/hero1.png' },
    { title: '3D сканування', description: 'Ціна залежить від часу сканування', price: 'Від 500 грн', image: 'assets/images/hero1.png' }
  ];

}
