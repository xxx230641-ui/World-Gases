export interface Product {
  id: string;
  title: string;
  category: string;
  image: string;
  description?: string;
  size?: string;
  price?: string;
}

const realisticCooktops: Product[] = [
  {
    id: 'cooktop-1',
    title: 'طباخ غاز بلت ان', titleEn: 'Built-in Gas Cooktop',
    category: 'طباخات غاز وكهرباء بلت ان Built-in', categoryEn: 'Built-in Gas & Electric Cooktops',
    image: '/images/products/IMG-20260827-WA0001.jpg',
    description: "موقد طهي بلت ان ميار MAIELER إيطالي 100%، عرض 90سم، 5 عيون، مناصب سكب، أمان كامل، إشعال ذاتي، كفالة الوكيل", descriptionEn: "MAIELER Built-in Cooktop 100% Italian, 90cm width, 5 burners, cast iron pan supports, full safety, auto-ignition, agent warranty",
    size: "90 سم",
    price: "240 دينار"
  },
  {
    id: 'cooktop-2',
    title: 'طباخ غاز بلت ان', titleEn: 'Built-in Gas Cooktop',
    category: 'طباخات غاز وكهرباء بلت ان Built-in', categoryEn: 'Built-in Gas & Electric Cooktops',
    image: '/images/products/IMG-20260827-WA0002.jpg',
    description: "موقد طهي بلت ان ميار MAIELER إيطالي 100%، عرض 90سم، 5 عيون، مناصب سكب، أمان كامل، إشعال ذاتي، كفالة الوكيل", descriptionEn: "MAIELER Built-in Cooktop 100% Italian, 90cm width, 5 burners, cast iron pan supports, full safety, auto-ignition, agent warranty",
    size: "90 سم",
    price: "170 JD"
  },
  {
    id: 'cooktop-3',
    title: 'طباخ غاز بلت ان', titleEn: 'Built-in Gas Cooktop',
    category: 'طباخات غاز وكهرباء بلت ان Built-in', categoryEn: 'Built-in Gas & Electric Cooktops',
    image: '/images/products/IMG-20260827-WA0003.jpg',
    description: "موقد طهي بلت ان سوبر شيف SUPERCHEF إيطالي، عرض 90سم، 5 عيون، مناصب سكب، أمان كامل، إشعال ذاتي، كفالة الوكيل", descriptionEn: "SUPERCHEF Built-in Cooktop Italian, 90cm width, 5 burners, cast iron pan supports, full safety, auto-ignition, agent warranty",
    size: "90 سم",
    price: "299 JD"
  },
  {
    id: 'cooktop-4',
    title: 'طباخ غاز بلت ان', titleEn: 'Built-in Gas Cooktop',
    category: 'طباخات غاز وكهرباء بلت ان Built-in', categoryEn: 'Built-in Gas & Electric Cooktops',
    image: '/images/products/IMG-20260827-WA0004.jpg',
    description: "موقد طهي بلت ان كونتي CONTI إيطالي 100%، عرض 90سم، 5 عيون، مناصب سكب، أمان كامل، إشعال ذاتي، كفالة الوكيل", descriptionEn: "CONTI Built-in Cooktop 100% Italian, 90cm width, 5 burners, cast iron pan supports, full safety, auto-ignition, agent warranty",
    size: "90 سم",
    price: ""
  },
  {
    id: 'cooktop-5',
    title: 'طباخ غاز بلت ان', titleEn: 'Built-in Gas Cooktop',
    category: 'طباخات غاز وكهرباء بلت ان Built-in', categoryEn: 'Built-in Gas & Electric Cooktops',
    image: '/images/products/IMG-20260827-WA0005.jpg',
    description: "موقد طهي بلت ان ميار MAIELER إيطالي 100%، عرض 90سم، 5 عيون، مناصب سكب، أمان كامل، إشعال ذاتي، كفالة الوكيل", descriptionEn: "MAIELER Built-in Cooktop 100% Italian, 90cm width, 5 burners, cast iron pan supports, full safety, auto-ignition, agent warranty",
    size: "90 سم",
    price: "220 دينار"
  },
  {
    id: 'cooktop-6',
    title: 'طباخ غاز بلت ان', titleEn: 'Built-in Gas Cooktop',
    category: 'طباخات غاز وكهرباء بلت ان Built-in', categoryEn: 'Built-in Gas & Electric Cooktops',
    image: '/images/products/IMG-20260827-WA0006.jpg',
    description: "موقد طهي بلت ان إيطالي، عرض 90سم، 5 عيون، مناصب سكب، أمان كامل، إشعال ذاتي، كفالة الوكيل", descriptionEn: "Built-in Cooktop Italian, عرض 90سم, 5 burners, cast iron pan supports, full safety, auto-ignition, agent warranty",
    size: "90 سم",
    price: "99 JD"
  },
  {
    id: 'cooktop-7',
    title: 'طباخ غاز بلت ان', titleEn: 'Built-in Gas Cooktop',
    category: 'طباخات غاز وكهرباء بلت ان Built-in', categoryEn: 'Built-in Gas & Electric Cooktops',
    image: '/images/products/IMG-20260827-WA0007.jpg',
    description: "موقد طهي بلت ان كهرباء سيراميك إيلبا ELBA Vitroceramic Electric Hob إيطالي، عرض 90سم، 5 عيون، أمان كامل، إشعال ذاتي، كفالة الوكيل", descriptionEn: "ELBA Vitroceramic Electric Hob Italian, 90cm width, 5 burners, full safety, auto-ignition, agent warranty",
    size: "90 سم",
    price: "475 JD"
  },
  {
    id: 'cooktop-8',
    title: 'طباخ غاز بلت ان', titleEn: 'Built-in Gas Cooktop',
    category: 'طباخات غاز وكهرباء بلت ان Built-in', categoryEn: 'Built-in Gas & Electric Cooktops',
    image: '/images/products/IMG-20260827-WA0008.jpg',
    description: "موقد طهي بلت ان ميار MAIELER إيطالي 100%، عرض 90سم، 5 عيون، مناصب سكب، أمان كامل، إشعال ذاتي، كفالة الوكيل", descriptionEn: "MAIELER Built-in Cooktop 100% Italian, 90cm width, 5 burners, cast iron pan supports, full safety, auto-ignition, agent warranty",
    size: "90 سم",
    price: "260 دينار"
  },
  {
    id: 'cooktop-9',
    title: 'طباخ غاز بلت ان', titleEn: 'Built-in Gas Cooktop',
    category: 'طباخات غاز وكهرباء بلت ان Built-in', categoryEn: 'Built-in Gas & Electric Cooktops',
    image: '/images/products/IMG-20260827-WA0009.jpg',
    description: "موقد طهي بلت ان إيلبا ELBA Vitroceramic Turbo Gas إيطالي، عرض 90سم، 5 عيون، مناصب سكب، أمان كامل، إشعال ذاتي، كفالة الوكيل", descriptionEn: "ELBA Vitroceramic Turbo Gas Built-in Cooktop Italian, 90cm width, 5 burners, cast iron pan supports, full safety, auto-ignition, agent warranty",
    size: "90 سم",
    price: "475 JD"
  },
  {
    id: 'cooktop-10',
    title: 'طباخ غاز بلت ان', titleEn: 'Built-in Gas Cooktop',
    category: 'طباخات غاز وكهرباء بلت ان Built-in', categoryEn: 'Built-in Gas & Electric Cooktops',
    image: '/images/products/IMG-20260827-WA0010.jpg',
    description: "موقد طهي بلت ان زجاج FAF Glass Built-in Hobs إيطالي، عرض 90سم، 5 عيون، مناصب سكب، أمان كامل، إشعال ذاتي، كفالة الوكيل", descriptionEn: "Built-in Cooktop زجاج FAF Glass Built-in Hobs Italian, عرض 90سم, 5 burners, cast iron pan supports, full safety, auto-ignition, agent warranty",
    size: "90 سم",
    price: "265 JD"
  },
  {
    id: 'cooktop-11',
    title: 'طباخ غاز بلت ان', titleEn: 'Built-in Gas Cooktop',
    category: 'طباخات غاز وكهرباء بلت ان Built-in', categoryEn: 'Built-in Gas & Electric Cooktops',
    image: '/images/products/IMG-20260827-WA0011.jpg',
    description: "موقد طهي بلت ان A-TEC إيطالي، 5 عيون، أمان كامل، إشعال ذاتي، مناصب سكب، كفالة الوكيل", descriptionEn: "Built-in Cooktop A-TEC Italian, 5 burners, full safety, auto-ignition, cast iron pan supports, agent warranty",
    size: "90 سم",
    price: "190 JD"
  },
  {
    id: 'cooktop-12',
    title: 'طباخ غاز بلت ان', titleEn: 'Built-in Gas Cooktop',
    category: 'طباخات غاز وكهرباء بلت ان Built-in', categoryEn: 'Built-in Gas & Electric Cooktops',
    image: '/images/products/IMG-20260827-WA0012.jpg',
    description: "موقد طهي بلت ان MAIELER ستيل أسود تيفال إيطالي، 5 عيون، أمان كامل، إشعال ذاتي، مناصب سكب، كفالة الوكيل", descriptionEn: "Built-in Cooktop MAIELER ستيل أسود تيفال Italian, 5 burners, full safety, auto-ignition, cast iron pan supports, agent warranty",
    size: "90 سم",
    price: "270 دينار"
  },
  {
    id: 'cooktop-13',
    title: 'طباخ غاز بلت ان', titleEn: 'Built-in Gas Cooktop',
    category: 'طباخات غاز وكهرباء بلت ان Built-in', categoryEn: 'Built-in Gas & Electric Cooktops',
    image: '/images/products/IMG-20260827-WA0013.jpg',
    description: "موقد طهي بلت ان A-TEC إيطالي، 5 عيون، أمان كامل، إشعال ذاتي، مناصب سكب، كفالة الوكيل", descriptionEn: "Built-in Cooktop A-TEC Italian, 5 burners, full safety, auto-ignition, cast iron pan supports, agent warranty",
    size: "90 سم",
    price: "269 JD"
  },
  {
    id: 'cooktop-14',
    title: 'طباخ غاز بلت ان', titleEn: 'Built-in Gas Cooktop',
    category: 'طباخات غاز وكهرباء بلت ان Built-in', categoryEn: 'Built-in Gas & Electric Cooktops',
    image: '/images/products/IMG-20260827-WA0014.jpg',
    description: "موقد طهي بلت ان سيكوريت كهرباء KINDA، 5 عيون، أمان كامل، إشعال ذاتي، كفالة الوكيل", descriptionEn: "Built-in Cooktop سيكوريت كهرباء KINDA, 5 burners, full safety, auto-ignition, agent warranty",
    size: "90 سم",
    price: "240 JD"
  },
  {
    id: 'cooktop-15',
    title: 'طباخ غاز بلت ان', titleEn: 'Built-in Gas Cooktop',
    category: 'طباخات غاز وكهرباء بلت ان Built-in', categoryEn: 'Built-in Gas & Electric Cooktops',
    image: '/images/products/IMG-20260827-WA0015.jpg',
    description: "موقد طهي بلت ان SUPERCHEF إيطالي، 5 عيون، أمان كامل، إشعال ذاتي، مناصب سكب، كفالة الوكيل", descriptionEn: "Built-in Cooktop SUPERCHEF Italian, 5 burners, full safety, auto-ignition, cast iron pan supports, agent warranty",
    size: "90 سم",
    price: "249 JD"
  },
  {
    id: 'cooktop-16',
    title: 'طباخ غاز بلت ان', titleEn: 'Built-in Gas Cooktop',
    category: 'طباخات غاز وكهرباء بلت ان Built-in', categoryEn: 'Built-in Gas & Electric Cooktops',
    image: '/images/products/IMG-20260827-WA0016.jpg',
    description: "موقد طهي بلت ان MAIELER ستيل أسود تيفال إيطالي، 5 عيون، أمان كامل، إشعال ذاتي، مناصب سكب، كفالة الوكيل", descriptionEn: "Built-in Cooktop MAIELER ستيل أسود تيفال Italian, 5 burners, full safety, auto-ignition, cast iron pan supports, agent warranty",
    size: "90 سم",
    price: "260 دينار"
  },
  {
    id: 'cooktop-17',
    title: 'طباخ غاز بلت ان', titleEn: 'Built-in Gas Cooktop',
    category: 'طباخات غاز وكهرباء بلت ان Built-in', categoryEn: 'Built-in Gas & Electric Cooktops',
    image: '/images/products/IMG-20260827-WA0017.jpg',
    description: "موقد طهي بلت ان SUPERCHEF إيطالي، 5 عيون، أمان كامل، إشعال ذاتي، مناصب سكب، كفالة الوكيل", descriptionEn: "Built-in Cooktop SUPERCHEF Italian, 5 burners, full safety, auto-ignition, cast iron pan supports, agent warranty",
    size: "90 سم",
    price: "189 JD"
  },
  {
    id: 'cooktop-18',
    title: 'طباخ غاز بلت ان', titleEn: 'Built-in Gas Cooktop',
    category: 'طباخات غاز وكهرباء بلت ان Built-in', categoryEn: 'Built-in Gas & Electric Cooktops',
    image: '/images/products/IMG-20260827-WA0018.jpg',
    description: "موقد طهي بلت ان CONTI إيطالي، 5 عيون، أمان كامل، إشعال ذاتي، مناصب سكب، كفالة الوكيل", descriptionEn: "Built-in Cooktop CONTI Italian, 5 burners, full safety, auto-ignition, cast iron pan supports, agent warranty",
    size: "90 سم",
    price: "غير مذكور"
  },
  {
    id: 'cooktop-19',
    title: 'طباخ غاز بلت ان', titleEn: 'Built-in Gas Cooktop',
    category: 'طباخات غاز وكهرباء بلت ان Built-in', categoryEn: 'Built-in Gas & Electric Cooktops',
    image: '/images/products/IMG-20260827-WA0019.jpg',
    description: "موقد طهي بلت ان A-TEC سيكوريت كهرباء إيطالي، 5 عيون، أمان كامل، إشعال ذاتي، كفالة الوكيل", descriptionEn: "Built-in Cooktop A-TEC سيكوريت كهرباء Italian, 5 burners, full safety, auto-ignition, agent warranty",
    size: "90 سم",
    price: "375 JD"
  },
  {
    id: 'cooktop-20',
    title: 'طباخ غاز بلت ان', titleEn: 'Built-in Gas Cooktop',
    category: 'طباخات غاز وكهرباء بلت ان Built-in', categoryEn: 'Built-in Gas & Electric Cooktops',
    image: '/images/products/IMG-20260827-WA0020.jpg',
    description: "موقد طهي بلت ان Blumatic ستيل أسود تيفال إيطالي، 5 عيون، أمان كامل، إشعال ذاتي، مناصب سكب، كفالة الوكيل", descriptionEn: "Built-in Cooktop Blumatic ستيل أسود تيفال Italian, 5 burners, full safety, auto-ignition, cast iron pan supports, agent warranty",
    size: "90 سم",
    price: "240 JD"
  },
  {
    id: 'cooktop-21',
    title: 'طباخ غاز بلت ان', titleEn: 'Built-in Gas Cooktop',
    category: 'طباخات غاز وكهرباء بلت ان Built-in', categoryEn: 'Built-in Gas & Electric Cooktops',
    image: '/images/products/IMG-20260827-WA0021.jpg',
    description: "موقد طهي بلت ان A-TEC إيطالي، 5 عيون، أمان كامل، إشعال ذاتي، مناصب سكب، كفالة الوكيل", descriptionEn: "Built-in Cooktop A-TEC Italian, 5 burners, full safety, auto-ignition, cast iron pan supports, agent warranty",
    size: "عرض 90سم",
    price: "275 JD"
  },
  {
    id: 'cooktop-22',
    title: 'طباخ غاز بلت ان', titleEn: 'Built-in Gas Cooktop',
    category: 'طباخات غاز وكهرباء بلت ان Built-in', categoryEn: 'Built-in Gas & Electric Cooktops',
    image: '/images/products/IMG-20260827-WA0022.jpg',
    description: "موقد طهي بلت ان VINERA، 5 عيون، أمان كامل، إشعال ذاتي، مناصب سكب، كفالة الوكيل", descriptionEn: "Built-in Cooktop VINERA, 5 burners, full safety, auto-ignition, cast iron pan supports, agent warranty",
    size: "عرض 90سم",
    price: "99 دينار"
  },
  {
    id: 'cooktop-23',
    title: 'طباخ غاز بلت ان', titleEn: 'Built-in Gas Cooktop',
    category: 'طباخات غاز وكهرباء بلت ان Built-in', categoryEn: 'Built-in Gas & Electric Cooktops',
    image: '/images/products/IMG-20260827-WA0023.jpg',
    description: "موقد طهي بلت ان A-TEC إيطالي، 5 عيون، أمان كامل، إشعال ذاتي، مناصب سكب، كفالة الوكيل", descriptionEn: "Built-in Cooktop A-TEC Italian, 5 burners, full safety, auto-ignition, cast iron pan supports, agent warranty",
    size: "عرض 90سم",
    price: "240 JD"
  },
  {
    id: 'cooktop-24',
    title: 'طباخ غاز بلت ان', titleEn: 'Built-in Gas Cooktop',
    category: 'طباخات غاز وكهرباء بلت ان Built-in', categoryEn: 'Built-in Gas & Electric Cooktops',
    image: '/images/products/IMG-20260827-WA0024.jpg',
    description: "موقد طهي بلت ان ستيل اسود تيفال Blumatic إيطالي، 5 عيون، أمان كامل، إشعال ذاتي، مناصب سكب، كفالة الوكيل", descriptionEn: "Built-in Cooktop ستيل اسود تيفال Blumatic Italian, 5 burners, full safety, auto-ignition, cast iron pan supports, agent warranty",
    size: "عرض 90سم",
    price: "280 JD"
  },
  {
    id: 'cooktop-25',
    title: 'طباخ غاز بلت ان', titleEn: 'Built-in Gas Cooktop',
    category: 'طباخات غاز وكهرباء بلت ان Built-in', categoryEn: 'Built-in Gas & Electric Cooktops',
    image: '/images/products/IMG-20260827-WA0025.jpg',
    description: "موقد طهي بلت ان ستيل اسود تيفال A-TEC إيطالي، 5 عيون، أمان كامل، إشعال ذاتي، مناصب سكب، كفالة الوكيل", descriptionEn: "Built-in Cooktop ستيل اسود تيفال A-TEC Italian, 5 burners, full safety, auto-ignition, cast iron pan supports, agent warranty",
    size: "عرض 90سم",
    price: "255 JD"
  },
  {
    id: 'cooktop-26',
    title: 'طباخ غاز بلت ان', titleEn: 'Built-in Gas Cooktop',
    category: 'طباخات غاز وكهرباء بلت ان Built-in', categoryEn: 'Built-in Gas & Electric Cooktops',
    image: '/images/products/IMG-20260827-WA0026.jpg',
    description: "موقد طهي بلت ان ستيل اسود VINERA، 5 عيون، أمان كامل، إشعال ذاتي، مناصب سكب، كفالة الوكيل", descriptionEn: "Built-in Cooktop ستيل اسود VINERA, 5 burners, full safety, auto-ignition, cast iron pan supports, agent warranty",
    size: "عرض 90سم",
    price: "120 JD"
  },
  {
    id: 'cooktop-27',
    title: 'طباخ غاز بلت ان', titleEn: 'Built-in Gas Cooktop',
    category: 'طباخات غاز وكهرباء بلت ان Built-in', categoryEn: 'Built-in Gas & Electric Cooktops',
    image: '/images/products/IMG-20260827-WA0027.jpg',
    description: "موقد طهي بلت ان ستيل اسود تيفال A-TEC إيطالي، 5 عيون، أمان كامل، إشعال ذاتي، مناصب سكب، كفالة الوكيل", descriptionEn: "Built-in Cooktop ستيل اسود تيفال A-TEC Italian, 5 burners, full safety, auto-ignition, cast iron pan supports, agent warranty",
    size: "عرض 90سم",
    price: "220 JD"
  },
  {
    id: 'cooktop-28',
    title: 'طباخ غاز بلت ان', titleEn: 'Built-in Gas Cooktop',
    category: 'طباخات غاز وكهرباء بلت ان Built-in', categoryEn: 'Built-in Gas & Electric Cooktops',
    image: '/images/products/IMG-20260827-WA0028.jpg',
    description: "موقد طهي بلت ان CONTI إيطالي، 5 عيون، أمان كامل، إشعال ذاتي، مناصب سكب، كفالة الوكيل", descriptionEn: "Built-in Cooktop CONTI Italian, 5 burners, full safety, auto-ignition, cast iron pan supports, agent warranty",
    size: "عرض 90سم",
    price: "غير مذكور"
  },
  {
    id: 'cooktop-29',
    title: 'طباخ غاز بلت ان', titleEn: 'Built-in Gas Cooktop',
    category: 'طباخات غاز وكهرباء بلت ان Built-in', categoryEn: 'Built-in Gas & Electric Cooktops',
    image: '/images/products/IMG-20260827-WA0029.jpg',
    description: "موقد طهي بلت ان A-TEC إيطالي، 5 عيون، أمان كامل، إشعال ذاتي، مناصب سكب، كفالة الوكيل", descriptionEn: "Built-in Cooktop A-TEC Italian, 5 burners, full safety, auto-ignition, cast iron pan supports, agent warranty",
    size: "عرض 90سم",
    price: "210 JD"
  },
  {
    id: 'cooktop-30',
    title: 'طباخ غاز بلت ان', titleEn: 'Built-in Gas Cooktop',
    category: 'طباخات غاز وكهرباء بلت ان Built-in', categoryEn: 'Built-in Gas & Electric Cooktops',
    image: '/images/products/IMG-20260827-WA0030.jpg',
    description: "موقد طهي بلت ان غاز+كهرباء A-TEC إيطالي، 6 عيون، أمان كامل، إشعال ذاتي، مناصب سكب، كفالة الوكيل", descriptionEn: "Built-in Cooktop غاز+كهرباء A-TEC Italian, 6 عيون, full safety, auto-ignition, cast iron pan supports, agent warranty",
    size: "عرض 90سم",
    price: "255 JD"
  },
  {
    id: 'cooktop-31',
    title: 'طباخ غاز بلت ان', titleEn: 'Built-in Gas Cooktop',
    category: 'طباخات غاز وكهرباء بلت ان Built-in', categoryEn: 'Built-in Gas & Electric Cooktops',
    image: '/images/products/IMG-20260827-WA0031.jpg',
    description: "A-TEC موقد طهي بلت ان، 5 عيون، أمان كامل، اشعال ذاتي، مناصب سكب، كفالة الوكيل، صناعة إيطالية", descriptionEn: "A-TEC Built-in Cooktop, 5 burners, full safety, auto-ignition, cast iron pan supports, agent warranty, Italian made",
    size: "90 سم",
    price: "210 JD"
  },
  {
    id: 'cooktop-32',
    title: 'طباخ غاز بلت ان', titleEn: 'Built-in Gas Cooktop',
    category: 'طباخات غاز وكهرباء بلت ان Built-in', categoryEn: 'Built-in Gas & Electric Cooktops',
    image: '/images/products/IMG-20260827-WA0032.jpg',
    description: "Blumatic موقد طهي بلت ان، 5 عيون، أمان كامل، اشعال ذاتي، مناصب سكب، كفالة الوكيل، صناعة إيطالية", descriptionEn: "Blumatic Built-in Cooktop, 5 burners, full safety, auto-ignition, cast iron pan supports, agent warranty, Italian made",
    size: "90 سم",
    price: "275 JD"
  },
  {
    id: 'cooktop-33',
    title: 'طباخ غاز بلت ان', titleEn: 'Built-in Gas Cooktop',
    category: 'طباخات غاز وكهرباء بلت ان Built-in', categoryEn: 'Built-in Gas & Electric Cooktops',
    image: '/images/products/IMG-20260827-WA0033.jpg',
    description: "A-TEC موقد طهي بلت ان، 5 عيون، أمان كامل، اشعال ذاتي، مناصب سكب، كفالة الوكيل، صناعة إيطالية", descriptionEn: "A-TEC Built-in Cooktop, 5 burners, full safety, auto-ignition, cast iron pan supports, agent warranty, Italian made",
    size: "90 سم",
    price: "169 JD"
  },
  {
    id: 'cooktop-34',
    title: 'طباخ غاز بلت ان', titleEn: 'Built-in Gas Cooktop',
    category: 'طباخات غاز وكهرباء بلت ان Built-in', categoryEn: 'Built-in Gas & Electric Cooktops',
    image: '/images/products/IMG-20260827-WA0034.jpg',
    description: "Blumatic موقد طهي بلت ان، 5 عيون، أمان كامل، اشعال ذاتي، مناصب سكب، كفالة الوكيل، صناعة إيطالية", descriptionEn: "Blumatic Built-in Cooktop, 5 burners, full safety, auto-ignition, cast iron pan supports, agent warranty, Italian made",
    size: "90 سم",
    price: "275 JD"
  },
  {
    id: 'cooktop-35',
    title: 'طباخ غاز بلت ان', titleEn: 'Built-in Gas Cooktop',
    category: 'طباخات غاز وكهرباء بلت ان Built-in', categoryEn: 'Built-in Gas & Electric Cooktops',
    image: '/images/products/IMG-20260827-WA0035.jpg',
    description: "A-TEC موقد طهي بلت ان، 5 عيون، أمان كامل، اشعال ذاتي، مناصب سكب، كفالة الوكيل، صناعة إيطالية", descriptionEn: "A-TEC Built-in Cooktop, 5 burners, full safety, auto-ignition, cast iron pan supports, agent warranty, Italian made",
    size: "90 سم",
    price: "169 JD"
  },
  {
    id: 'cooktop-36',
    title: 'طباخ غاز بلت ان', titleEn: 'Built-in Gas Cooktop',
    category: 'طباخات غاز وكهرباء بلت ان Built-in', categoryEn: 'Built-in Gas & Electric Cooktops',
    image: '/images/products/IMG-20260827-WA0036.jpg',
    description: "SUPERCHEF موقد طهي بلت ان ستيل اسود، 5 عيون، أمان كامل، اشعال ذاتي، مناصب سكب، كفالة الوكيل، صناعة إيطالية", descriptionEn: "SUPERCHEF Built-in Cooktop ستيل اسود, 5 burners, full safety, auto-ignition, cast iron pan supports, agent warranty, Italian made",
    size: "90 سم",
    price: "249 JD"
  },
  {
    id: 'cooktop-37',
    title: 'طباخ غاز بلت ان', titleEn: 'Built-in Gas Cooktop',
    category: 'طباخات غاز وكهرباء بلت ان Built-in', categoryEn: 'Built-in Gas & Electric Cooktops',
    image: '/images/products/IMG-20260827-WA0037.jpg',
    description: "SILVERLINE موقد طهي بلت ان، 5 عيون، أمان كامل، اشعال ذاتي، مناصب سكب، كفالة الوكيل، صناعة إيطالية", descriptionEn: "SILVERLINE Built-in Cooktop, 5 burners, full safety, auto-ignition, cast iron pan supports, agent warranty, Italian made",
    size: "90 سم",
    price: "199 دينار"
  },
  {
    id: 'cooktop-38',
    title: 'طباخ غاز بلت ان', titleEn: 'Built-in Gas Cooktop',
    category: 'طباخات غاز وكهرباء بلت ان Built-in', categoryEn: 'Built-in Gas & Electric Cooktops',
    image: '/images/products/IMG-20260827-WA0038.jpg',
    description: "MAIELER موقد طهي بلت ان، 5 عيون، أمان كامل، اشعال ذاتي، مناصب سكب، كفالة الوكيل، صناعة إيطالية 100%", descriptionEn: "MAIELER Built-in Cooktop, 5 burners, full safety, auto-ignition, cast iron pan supports, agent warranty, Italian made 100%",
    size: "90 سم",
    price: "199 JD"
  },
  {
    id: 'cooktop-39',
    title: 'طباخ غاز بلت ان', titleEn: 'Built-in Gas Cooktop',
    category: 'طباخات غاز وكهرباء بلت ان Built-in', categoryEn: 'Built-in Gas & Electric Cooktops',
    image: '/images/products/IMG-20260827-WA0039.jpg',
    description: "SILVERLINE موقد طهي بلت ان زجاج أسود، 5 عيون، أمان كامل، اشعال ذاتي، مناصب سكب، كفالة الوكيل، صناعة إيطالية", descriptionEn: "SILVERLINE Built-in Cooktop زجاج أسود, 5 burners, full safety, auto-ignition, cast iron pan supports, agent warranty, Italian made",
    size: "90 سم",
    price: "225 JD"
  },
  {
    id: 'cooktop-40',
    title: 'طباخ غاز بلت ان', titleEn: 'Built-in Gas Cooktop',
    category: 'طباخات غاز وكهرباء بلت ان Built-in', categoryEn: 'Built-in Gas & Electric Cooktops',
    image: '/images/products/IMG-20260827-WA0040.jpg',
    description: "SUPERCHEF موقد طهي بلت ان، 5 عيون، أمان كامل، اشعال ذاتي، مناصب سكب، كفالة الوكيل، صناعة إيطالية", descriptionEn: "SUPERCHEF Built-in Cooktop, 5 burners, full safety, auto-ignition, cast iron pan supports, agent warranty, Italian made",
    size: "90 سم",
    price: "239 JD"
  },
  {
    id: 'cooktop-41',
    title: 'طباخ غاز بلت ان', titleEn: 'Built-in Gas Cooktop',
    category: 'طباخات غاز وكهرباء بلت ان Built-in', categoryEn: 'Built-in Gas & Electric Cooktops',
    image: '/images/products/IMG-20260827-WA0041.jpg',
    description: "موقد طهي بلت ان Elba، 5 عيون، أمان كامل، إشعال ذاتي، مناصب سكب، كفالة الوكيل", descriptionEn: "Built-in Cooktop Elba, 5 burners, full safety, auto-ignition, cast iron pan supports, agent warranty",
    size: "90 سم",
    price: "355 JD"
  },
  {
    id: 'cooktop-42',
    title: 'طباخ غاز بلت ان', titleEn: 'Built-in Gas Cooktop',
    category: 'طباخات غاز وكهرباء بلت ان Built-in', categoryEn: 'Built-in Gas & Electric Cooktops',
    image: '/images/products/IMG-20260827-WA0042.jpg',
    description: "موقد طهي بلت ان زجاج Maieler، 5 عيون، أمان كامل، إشعال ذاتي، مناصب سكب، كفالة الوكيل", descriptionEn: "Built-in Cooktop زجاج Maieler, 5 burners, full safety, auto-ignition, cast iron pan supports, agent warranty",
    size: "90 سم",
    price: "299 دينار"
  },
  {
    id: 'cooktop-43',
    title: 'طباخ غاز بلت ان', titleEn: 'Built-in Gas Cooktop',
    category: 'طباخات غاز وكهرباء بلت ان Built-in', categoryEn: 'Built-in Gas & Electric Cooktops',
    image: '/images/products/IMG-20260827-WA0043.jpg',
    description: "موقد طهي بلت ان Elba Turbo Gas، 5 عيون، أمان كامل، إشعال ذاتي، مناصب سكب، كفالة الوكيل", descriptionEn: "Built-in Cooktop Elba Turbo Gas, 5 burners, full safety, auto-ignition, cast iron pan supports, agent warranty",
    size: "90 سم",
    price: "399 JD"
  },
  {
    id: 'cooktop-44',
    title: 'طباخ غاز بلت ان', titleEn: 'Built-in Gas Cooktop',
    category: 'طباخات غاز وكهرباء بلت ان Built-in', categoryEn: 'Built-in Gas & Electric Cooktops',
    image: '/images/products/IMG-20260827-WA0044.jpg',
    description: "موقد طهي بلت ان Superchef، 5 عيون، أمان كامل، إشعال ذاتي، مناصب سكب، كفالة الوكيل", descriptionEn: "Built-in Cooktop Superchef, 5 burners, full safety, auto-ignition, cast iron pan supports, agent warranty",
    size: "90 سم",
    price: "239 JD"
  },
  {
    id: 'cooktop-45',
    title: 'طباخ غاز بلت ان', titleEn: 'Built-in Gas Cooktop',
    category: 'طباخات غاز وكهرباء بلت ان Built-in', categoryEn: 'Built-in Gas & Electric Cooktops',
    image: '/images/products/IMG-20260827-WA0045.jpg',
    description: "موقد طهي بلت ان Elba Turbo Gas، 5 عيون، أمان كامل، إشعال ذاتي، مناصب سكب، كفالة الوكيل", descriptionEn: "Built-in Cooktop Elba Turbo Gas, 5 burners, full safety, auto-ignition, cast iron pan supports, agent warranty",
    size: "90 سم",
    price: "333 JD"
  },
  {
    id: 'cooktop-46',
    title: 'طباخ غاز بلت ان', titleEn: 'Built-in Gas Cooktop',
    category: 'طباخات غاز وكهرباء بلت ان Built-in', categoryEn: 'Built-in Gas & Electric Cooktops',
    image: '/images/products/IMG-20260827-WA0046.jpg',
    description: "موقد طهي بلت ان Conti Black Glass، 5 عيون، أمان كامل، إشعال ذاتي، مناصب سكب، كفالة الوكيل", descriptionEn: "Built-in Cooktop Conti Black Glass, 5 burners, full safety, auto-ignition, cast iron pan supports, agent warranty",
    size: "90 سم",
    price: "غير مذكور"
  },
  {
    id: 'cooktop-47',
    title: 'طباخ غاز بلت ان', titleEn: 'Built-in Gas Cooktop',
    category: 'طباخات غاز وكهرباء بلت ان Built-in', categoryEn: 'Built-in Gas & Electric Cooktops',
    image: '/images/products/IMG-20260827-WA0047.jpg',
    description: "موقد طهي بلت ان Elba، 5 عيون، أمان كامل، إشعال ذاتي، مناصب رفيعة، كفالة الوكيل", descriptionEn: "Built-in Cooktop Elba, 5 burners, full safety, auto-ignition, slim pan supports, agent warranty",
    size: "90 سم",
    price: "225 JD"
  },
  {
    id: 'cooktop-48',
    title: 'طباخ غاز بلت ان', titleEn: 'Built-in Gas Cooktop',
    category: 'طباخات غاز وكهرباء بلت ان Built-in', categoryEn: 'Built-in Gas & Electric Cooktops',
    image: '/images/products/IMG-20260827-WA0048.jpg',
    description: "موقد طهي بلت ان ستيل اسود Elba، 5 عيون، أمان كامل، إشعال ذاتي، مناصب رفيعة، كفالة الوكيل", descriptionEn: "Built-in Cooktop ستيل اسود Elba, 5 burners, full safety, auto-ignition, slim pan supports, agent warranty",
    size: "90 سم",
    price: "225 JD"
  },
  {
    id: 'cooktop-49',
    title: 'طباخ غاز بلت ان', titleEn: 'Built-in Gas Cooktop',
    category: 'طباخات غاز وكهرباء بلت ان Built-in', categoryEn: 'Built-in Gas & Electric Cooktops',
    image: '/images/products/IMG-20260827-WA0049.jpg',
    description: "موقد طهي بلت ان ستيل اسود Elba، 5 عيون، أمان كامل، إشعال ذاتي، مناصب سكب، كفالة الوكيل", descriptionEn: "Built-in Cooktop ستيل اسود Elba, 5 burners, full safety, auto-ignition, cast iron pan supports, agent warranty",
    size: "90 سم",
    price: "255 JD"
  },
  {
    id: 'cooktop-50',
    title: 'طباخ غاز بلت ان', titleEn: 'Built-in Gas Cooktop',
    category: 'طباخات غاز وكهرباء بلت ان Built-in', categoryEn: 'Built-in Gas & Electric Cooktops',
    image: '/images/products/IMG-20260827-WA0050.jpg',
    description: "موقد طهي بلت ان ستيل اسود تيفال Maieler، 5 عيون، أمان كامل، إشعال ذاتي، مناصب سكب، كفالة الوكيل", descriptionEn: "Built-in Cooktop ستيل اسود تيفال Maieler, 5 burners, full safety, auto-ignition, cast iron pan supports, agent warranty",
    size: "90 سم",
    price: "220 دينار"
  },
  {
    id: 'cooktop-51',
    title: 'طباخ غاز بلت ان', titleEn: 'Built-in Gas Cooktop',
    category: 'طباخات غاز وكهرباء بلت ان Built-in', categoryEn: 'Built-in Gas & Electric Cooktops',
    image: '/images/products/IMG-20260827-WA0051.jpg',
    description: "موقد طهي بلت ان FAF إيطالي، 5 عيون، مناصب سكب، أمان كامل، إشعال ذاتي، كفالة الوكيل", descriptionEn: "Built-in Cooktop FAF Italian, 5 burners, cast iron pan supports, full safety, auto-ignition, agent warranty",
    size: "90 سم",
    price: "225 JD"
  },
  {
    id: 'cooktop-52',
    title: 'طباخ غاز بلت ان', titleEn: 'Built-in Gas Cooktop',
    category: 'طباخات غاز وكهرباء بلت ان Built-in', categoryEn: 'Built-in Gas & Electric Cooktops',
    image: '/images/products/IMG-20260827-WA0052.jpg',
    description: "موقد طهي بلت ان ELBA Vitroceramic إيطالي، 5 عيون، مناصب سكب، أمان كامل، إشعال ذاتي، كفالة الوكيل", descriptionEn: "Built-in Cooktop ELBA Vitroceramic Italian, 5 burners, cast iron pan supports, full safety, auto-ignition, agent warranty",
    size: "90 سم",
    price: "445 JD"
  },
  {
    id: 'cooktop-53',
    title: 'طباخ غاز بلت ان', titleEn: 'Built-in Gas Cooktop',
    category: 'طباخات غاز وكهرباء بلت ان Built-in', categoryEn: 'Built-in Gas & Electric Cooktops',
    image: '/images/products/IMG-20260827-WA0053.jpg',
    description: "موقد طهي بلت ان ELBA إيطالي، 5 عيون، مناصب سكب، أمان كامل، إشعال ذاتي، كفالة الوكيل", descriptionEn: "Built-in Cooktop ELBA Italian, 5 burners, cast iron pan supports, full safety, auto-ignition, agent warranty",
    size: "90 سم",
    price: "255 JD"
  },
  {
    id: 'cooktop-54',
    title: 'طباخ غاز بلت ان', titleEn: 'Built-in Gas Cooktop',
    category: 'طباخات غاز وكهرباء بلت ان Built-in', categoryEn: 'Built-in Gas & Electric Cooktops',
    image: '/images/products/IMG-20260827-WA0054.jpg',
    description: "موقد طهي بلت ان MAIELER إيطالي، 5 عيون، مناصب سكب، أمان كامل، إشعال ذاتي، كفالة الوكيل", descriptionEn: "Built-in Cooktop MAIELER Italian, 5 burners, cast iron pan supports, full safety, auto-ignition, agent warranty",
    size: "90 سم",
    price: "190 JD"
  },
];

export const productsDatabase: Product[] = [
  ...realisticCooktops,
  ...Array.from({ length: 4 }).map((_, i) => ({
    id: `oven-${i + 1}`,
    title: `فرن بلت ان - قالب ${i + 1}`, titleEn: `Built-in Oven - Template ${i + 1}`,
    category: 'افران بلت ان Built-in غاز وكهرباء', categoryEn: 'Built-in Gas & Electric Ovens',
    image: 'قالب صورة',
    description: '',
    size: '',
    price: ''
  })),
  { id: '1001', title: 'شفاط مطبخ جداري', titleEn: 'Wall-mounted Kitchen Hood', category: 'شفاطات مطبخ وشفاطات جزيرة', categoryEn: 'Kitchen & Island Hoods', image: 'قالب صورة', description: '', size: '', price: '' },
  { id: '2001', title: 'ميكروويف مدمج', titleEn: 'Built-in Microwave', category: 'مايكرويفات بلت ان Built-in', categoryEn: 'Built-in Microwaves', image: 'قالب صورة', description: '', size: '', price: '' },
  { id: '3001', title: 'كولر ماء مدمج', titleEn: 'Built-in Water Cooler', category: 'كولرات بلت ان Built-in', categoryEn: 'Built-in Coolers', image: 'قالب صورة', description: '', size: '', price: '' },
  { id: '4001', title: 'جلاية صحون مدمجة', titleEn: 'Built-in Dishwasher', category: 'جلايات بلت ان Built-in', categoryEn: 'Built-in Dishwashers', image: 'قالب صورة', description: '', size: '', price: '' },
  { id: '5001', title: 'غسالة ملابس مدمجة', titleEn: 'Built-in Washing Machine', category: 'غسالات بلت ان Built-in', categoryEn: 'Built-in Washing Machines', image: 'قالب صورة', description: '', size: '', price: '' },
  { id: '6001', title: 'ثلاجة مدمجة', titleEn: 'Built-in Refrigerator', category: 'ثلاجات بلت ان Built-in', categoryEn: 'Built-in Refrigerators', image: 'قالب صورة', description: '', size: '', price: '' },
];

export const getProductsByCategory = (category: string) => {
  if (!category || category === 'الكل' || category === 'All') return productsDatabase;
  return productsDatabase.filter(p => p.category === category || p.categoryEn === category);
  if (!category || category === 'الكل') return productsDatabase;
  return productsDatabase.filter(p => p.category === category);
};
