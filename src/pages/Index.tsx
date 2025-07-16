import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: 'Современный стол',
      category: 'furniture',
      price: 25000,
      image: '/img/68b46a62-767e-48a2-ac76-9a3b7fca8b8a.jpg',
      description: 'Элегантный обеденный стол из массива дуба',
      inStock: true
    },
    {
      id: 2,
      name: 'Беспроводные наушники',
      category: 'electronics',
      price: 8500,
      image: '/img/ecc3f4e7-f5ec-4439-8ba3-41c67839d5f2.jpg',
      description: 'Качественные наушники с шумоподавлением',
      inStock: true
    },
    {
      id: 3,
      name: 'Кожаная куртка',
      category: 'clothing',
      price: 15000,
      image: '/img/815b57d8-4f7b-4060-a3f8-dec0e26b8995.jpg',
      description: 'Стильная куртка из натуральной кожи',
      inStock: false
    },
    {
      id: 4,
      name: 'Кофемашина',
      category: 'appliances',
      price: 45000,
      image: '/placeholder.svg',
      description: 'Автоматическая кофемашина для дома',
      inStock: true
    },
    {
      id: 5,
      name: 'Настольная лампа',
      category: 'furniture',
      price: 3500,
      image: '/placeholder.svg',
      description: 'Минималистичная LED лампа',
      inStock: true
    },
    {
      id: 6,
      name: 'Рюкзак',
      category: 'accessories',
      price: 6000,
      image: '/placeholder.svg',
      description: 'Водонепроницаемый рюкзак для путешествий',
      inStock: true
    }
  ];

  const categories = [
    { id: 'all', name: 'Все товары' },
    { id: 'furniture', name: 'Мебель' },
    { id: 'electronics', name: 'Электроника' },
    { id: 'clothing', name: 'Одежда' },
    { id: 'appliances', name: 'Бытовая техника' },
    { id: 'accessories', name: 'Аксессуары' }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-neutral-50">
      <Tabs defaultValue="home" className="w-full">
        {/* Navigation */}
        <div className="bg-white shadow-sm border-b border-neutral-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Icon name="Package" className="h-8 w-8 text-neutral-600 mr-3" />
                <h1 className="text-xl font-bold text-neutral-900">Каталог</h1>
              </div>
              <TabsList className="bg-neutral-100 border-neutral-200">
                <TabsTrigger value="home" className="text-neutral-700 data-[state=active]:bg-white data-[state=active]:text-neutral-900">Главная</TabsTrigger>
                <TabsTrigger value="about" className="text-neutral-700 data-[state=active]:bg-white data-[state=active]:text-neutral-900">О нас</TabsTrigger>
                <TabsTrigger value="contacts" className="text-neutral-700 data-[state=active]:bg-white data-[state=active]:text-neutral-900">Контакты</TabsTrigger>
              </TabsList>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <TabsContent value="home" className="mt-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h2 className="text-5xl font-light text-neutral-900 mb-6">
                Каталог товаров
              </h2>
              <p className="text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
                Широкий выбор качественных товаров для вашего дома и офиса
              </p>
            </div>

            {/* Search and Filters */}
            <div className="mb-12">
              <div className="flex flex-col sm:flex-row gap-6 items-center justify-between">
                <div className="relative flex-1 max-w-md">
                  <Icon name="Search" className="absolute left-3 top-3 h-4 w-4 text-neutral-400" />
                  <Input
                    placeholder="Поиск товаров..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 border-neutral-200 focus:border-neutral-400"
                  />
                </div>
                <div className="flex gap-2 flex-wrap">
                  {categories.map(category => (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category.id)}
                      className={selectedCategory === category.id 
                        ? "bg-neutral-900 text-white hover:bg-neutral-800" 
                        : "text-neutral-700 border-neutral-200 hover:bg-neutral-50"
                      }
                    >
                      {category.name}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map(product => (
                <Card key={product.id} className="hover:shadow-lg transition-all duration-300 border-neutral-200 hover:border-neutral-300 animate-fade-in">
                  <div className="aspect-square bg-neutral-100 rounded-t-lg overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-lg text-neutral-900 font-medium">{product.name}</CardTitle>
                      <Badge variant={product.inStock ? "default" : "secondary"} className={product.inStock ? "bg-neutral-900 text-white" : "bg-neutral-200 text-neutral-700"}>
                        {product.inStock ? 'В наличии' : 'Нет в наличии'}
                      </Badge>
                    </div>
                    <CardDescription className="text-neutral-600 leading-relaxed">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-light text-neutral-900">
                        {product.price.toLocaleString()} ₽
                      </span>
                      <Button variant="outline" size="sm" className="border-neutral-200 text-neutral-700 hover:bg-neutral-50">
                        <Icon name="Info" className="h-4 w-4 mr-2" />
                        Подробнее
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20 animate-fade-in">
                <Icon name="Search" className="h-16 w-16 text-neutral-400 mx-auto mb-6" />
                <p className="text-neutral-500 text-lg">Товары не найдены</p>
              </div>
            )}
          </div>
        </TabsContent>

        {/* About Section */}
        <TabsContent value="about" className="mt-0">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-light text-neutral-900 mb-6">О нас</h2>
              <p className="text-xl text-neutral-600 leading-relaxed">
                Мы создаем качественные товары для вашего комфорта
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
              <div className="text-center animate-fade-in">
                <div className="bg-neutral-100 rounded-full p-6 w-20 h-20 mx-auto mb-6">
                  <Icon name="Award" className="h-8 w-8 text-neutral-600" />
                </div>
                <h3 className="text-xl font-medium text-neutral-900 mb-4">Качество</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Только проверенные товары высокого качества
                </p>
              </div>
              <div className="text-center animate-fade-in">
                <div className="bg-neutral-100 rounded-full p-6 w-20 h-20 mx-auto mb-6">
                  <Icon name="Truck" className="h-8 w-8 text-neutral-600" />
                </div>
                <h3 className="text-xl font-medium text-neutral-900 mb-4">Доставка</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Быстрая доставка по всей России
                </p>
              </div>
              <div className="text-center animate-fade-in">
                <div className="bg-neutral-100 rounded-full p-6 w-20 h-20 mx-auto mb-6">
                  <Icon name="Users" className="h-8 w-8 text-neutral-600" />
                </div>
                <h3 className="text-xl font-medium text-neutral-900 mb-4">Поддержка</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Профессиональная поддержка клиентов
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-10 border border-neutral-200">
              <h3 className="text-3xl font-light text-neutral-900 mb-6">Наша история</h3>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Мы начали свою деятельность в 2020 году с целью предоставить клиентам 
                доступ к качественным товарам по доступным ценам. За это время мы 
                сформировали каталог из более чем 1000 товаров различных категорий.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Наша команда постоянно работает над расширением ассортимента и 
                улучшением качества обслуживания. Мы гордимся тем, что помогаем 
                людям находить именно то, что им нужно.
              </p>
            </div>
          </div>
        </TabsContent>

        {/* Contacts Section */}
        <TabsContent value="contacts" className="mt-0">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-light text-neutral-900 mb-6">Контакты</h2>
              <p className="text-xl text-neutral-600 leading-relaxed">
                Свяжитесь с нами любым удобным способом
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-white rounded-lg shadow-sm p-10 border border-neutral-200">
                <h3 className="text-2xl font-medium text-neutral-900 mb-8">Контактная информация</h3>
                
                <div className="space-y-8">
                  <div className="flex items-center">
                    <Icon name="Phone" className="h-5 w-5 text-neutral-600 mr-4" />
                    <div>
                      <p className="font-medium text-neutral-900">Телефон</p>
                      <p className="text-neutral-600">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Icon name="Mail" className="h-5 w-5 text-neutral-600 mr-4" />
                    <div>
                      <p className="font-medium text-neutral-900">Email</p>
                      <p className="text-neutral-600">info@catalog.ru</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Icon name="MapPin" className="h-5 w-5 text-neutral-600 mr-4" />
                    <div>
                      <p className="font-medium text-neutral-900">Адрес</p>
                      <p className="text-neutral-600">г. Москва, ул. Примерная, д. 123</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Icon name="Clock" className="h-5 w-5 text-neutral-600 mr-4" />
                    <div>
                      <p className="font-medium text-neutral-900">Режим работы</p>
                      <p className="text-neutral-600">Пн-Пт: 9:00 - 18:00</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-10 border border-neutral-200">
                <h3 className="text-2xl font-medium text-neutral-900 mb-8">Написать нам</h3>
                
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Имя
                    </label>
                    <Input placeholder="Ваше имя" className="border-neutral-200 focus:border-neutral-400" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Email
                    </label>
                    <Input type="email" placeholder="your@email.com" className="border-neutral-200 focus:border-neutral-400" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Сообщение
                    </label>
                    <textarea
                      className="w-full px-3 py-2 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-400"
                      rows={4}
                      placeholder="Ваше сообщение..."
                    />
                  </div>
                  
                  <Button className="w-full bg-neutral-900 hover:bg-neutral-800 text-white">
                    Отправить сообщение
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;