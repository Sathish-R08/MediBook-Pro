import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import FilterSidebar from './components/FilterSidebar';
import DoctorGrid from './components/DoctorGrid';
import SearchBar from './components/SearchBar';
import FilterChips from './components/FilterChips';
import SortDropdown from './components/SortDropdown';
import BookingModal from './components/BookingModal';

const DoctorListing = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('relevance');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [filters, setFilters] = useState({
    specialties: [],
    rating: '',
    availability: [],
    locations: []
  });

  const [doctors, setDoctors] = useState([
    {
      id: 1,
      name: 'Sarah Johnson',
      specialty: 'Cardiology',
      image: 'https://plus.unsplash.com/premium_photo-1661713606200-2832945b8d3f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 4.9,
      reviewCount: 127,
      experience: 15,
      location: 'Downtown Medical Center',
      consultationFee: 150,
      nextAvailable: '2025-08-16',
      nextAvailableTime: '10:00 AM - 11:00 AM',
      languages: ['English', 'Spanish', 'French'],
      isVerified: true
    },
    {
      id: 2,
      name: 'Michael Chen',
      specialty: 'Dermatology',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face',
      rating: 4.8,
      reviewCount: 89,
      experience: 12,
      location: 'Northside Clinic',
      consultationFee: 120,
      nextAvailable: '2025-08-17',
      nextAvailableTime: '2:00 PM - 3:00 PM',
      languages: ['English', 'Mandarin'],
      isVerified: true
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      specialty: 'Pediatrics',
      image: 'https://plus.unsplash.com/premium_photo-1661473820951-99a3565f3fca?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 4.9,
      reviewCount: 156,
      experience: 10,
      location: 'West End Hospital',
      consultationFee: 100,
      nextAvailable: '2025-08-16',
      nextAvailableTime: '3:00 PM - 4:00 PM',
      languages: ['English', 'Spanish'],
      isVerified: true
    },
    {
      id: 4,
      name: 'David Thompson',
      specialty: 'Orthopedics',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face',
      rating: 4.7,
      reviewCount: 98,
      experience: 18,
      location: 'Eastside Center',
      consultationFee: 180,
      nextAvailable: '2025-08-18',
      nextAvailableTime: '9:00 AM - 10:00 AM',
      languages: ['English'],
      isVerified: true
    },
    {
      id: 5,
      name: 'Lisa Wang',
      specialty: 'Neurology',
      image: 'https://plus.unsplash.com/premium_photo-1702598616428-205ea0fe9b05?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 4.8,
      reviewCount: 134,
      experience: 14,
      location: 'Downtown Medical Center',
      consultationFee: 200,
      nextAvailable: '2025-08-19',
      nextAvailableTime: '11:00 AM - 12:00 PM',
      languages: ['English', 'Mandarin', 'Korean'],
      isVerified: true
    },
    {
      id: 6,
      name: 'Robert Martinez',
      specialty: 'Psychiatry',
      image: 'https://plus.unsplash.com/premium_photo-1661492071612-98d26885614a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 4.6,
      reviewCount: 76,
      experience: 16,
      location: 'Northside Clinic',
      consultationFee: 160,
      nextAvailable: '2025-08-20',
      nextAvailableTime: '1:00 PM - 2:00 PM',
      languages: ['English', 'Spanish'],
      isVerified: true
    },
    {
      id: 7,
      name: 'Jennifer Kim',
      specialty: 'Radiology',
      image: 'https://plus.unsplash.com/premium_photo-1661580574627-9211124e5c3f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 4.7,
      reviewCount: 45,
      experience: 8,
      location: 'West End Hospital',
      consultationFee: 140,
      nextAvailable: '2025-08-17',
      nextAvailableTime: '4:00 PM - 5:00 PM',
      languages: ['English', 'Korean'],
      isVerified: true
    },
    {
      id: 8,
      name: 'James Wilson',
      specialty: 'Surgery',
      image: 'https://plus.unsplash.com/premium_photo-1661718954553-f775043016d5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 4.9,
      reviewCount: 203,
      experience: 22,
      location: 'Eastside Center',
      consultationFee: 250,
      nextAvailable: '2025-08-21',
      nextAvailableTime: '8:00 AM - 9:00 AM',
      languages: ['English'],
      isVerified: true
    },
    {
      id: 9,
      name: 'Amanda Foster',
      specialty: 'General Medicine',
      image: 'https://plus.unsplash.com/premium_photo-1661700138215-2ade8dd6f0c9?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 4.5,
      reviewCount: 67,
      experience: 7,
      location: 'Downtown Medical Center',
      consultationFee: 90,
      nextAvailable: '2025-08-16',
      nextAvailableTime: '5:00 PM - 6:00 PM',
      languages: ['English', 'French'],
      isVerified: true
    }
  ]);

  const [filteredDoctors, setFilteredDoctors] = useState(doctors);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    applyFiltersAndSort();
  }, [filters, sortBy, searchQuery, doctors]);

  const applyFiltersAndSort = () => {
    let filtered = [...doctors];

    // Apply search filter
    if (searchQuery) {
      filtered = filtered?.filter(doctor =>
        doctor?.name?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
        doctor?.specialty?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
        doctor?.location?.toLowerCase()?.includes(searchQuery?.toLowerCase())
      );
    }

    // Apply specialty filter
    if (filters?.specialties?.length > 0) {
      filtered = filtered?.filter(doctor =>
        filters?.specialties?.some(specialty =>
          doctor?.specialty?.toLowerCase()?.includes(specialty?.toLowerCase())
        )
      );
    }

    // Apply rating filter
    if (filters?.rating) {
      const minRating = parseInt(filters?.rating);
      filtered = filtered?.filter(doctor => doctor?.rating >= minRating);
    }

    // Apply availability filter
    if (filters?.availability?.length > 0) {
      filtered = filtered?.filter(doctor => {
        const availableDate = new Date(doctor.nextAvailable);
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow?.setDate(tomorrow?.getDate() + 1);

        return filters?.availability?.some(avail => {
          if (avail === 'today') return availableDate?.toDateString() === today?.toDateString();
          if (avail === 'tomorrow') return availableDate?.toDateString() === tomorrow?.toDateString();
          if (avail === 'week') return availableDate <= new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
          if (avail === 'month') return availableDate <= new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000);
          return true;
        });
      });
    }

    // Apply location filter
    if (filters?.locations?.length > 0) {
      filtered = filtered?.filter(doctor =>
        filters?.locations?.some(location =>
          doctor?.location?.toLowerCase()?.includes(location?.toLowerCase())
        )
      );
    }

    // Apply sorting
    filtered?.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b?.rating - a?.rating;
        case 'experience':
          return b?.experience - a?.experience;
        case 'availability':
          return new Date(a.nextAvailable) - new Date(b.nextAvailable);
        case 'price-low':
          return a?.consultationFee - b?.consultationFee;
        case 'price-high':
          return b?.consultationFee - a?.consultationFee;
        case 'name':
          return a?.name?.localeCompare(b?.name);
        default:
          return 0;
      }
    });

    setFilteredDoctors(filtered);
    setHasMore(filtered?.length > 20); // Mock pagination
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleRemoveFilter = (type, value) => {
    const newFilters = { ...filters };
    
    if (type === 'specialty') {
      newFilters.specialties = newFilters?.specialties?.filter(s => s !== value);
    } else if (type === 'rating') {
      newFilters.rating = '';
    } else if (type === 'availability') {
      newFilters.availability = newFilters?.availability?.filter(a => a !== value);
    } else if (type === 'location') {
      newFilters.locations = newFilters?.locations?.filter(l => l !== value);
    }
    
    setFilters(newFilters);
  };

  const handleClearAllFilters = () => {
    setFilters({
      specialties: [],
      rating: '',
      availability: [],
      locations: []
    });
    setSearchQuery('');
  };

  const handleBookNow = (doctor) => {
    setSelectedDoctor(doctor);
    setIsBookingModalOpen(true);
  };

  const handleLoadMore = () => {
    setLoading(true);
    // Simulate loading more doctors
    setTimeout(() => {
      setLoading(false);
      setHasMore(false);
    }, 1000);
  };

  const breadcrumbs = [
    { label: 'Home', path: '/homepage' },
    { label: 'Find Doctors', path: '/doctor-listing' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Breadcrumbs */}
      <div className="bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            {breadcrumbs?.map((crumb, index) => (
              <React.Fragment key={crumb?.path}>
                {index > 0 && (
                  <Icon name="ChevronRight" size={16} className="text-text-secondary" />
                )}
                <button
                  onClick={() => navigate(crumb?.path)}
                  className={`hover:text-primary transition-smooth ${
                    index === breadcrumbs?.length - 1
                      ? 'text-primary font-medium' :'text-text-secondary'
                  }`}
                >
                  {crumb?.label}
                </button>
              </React.Fragment>
            ))}
          </nav>
        </div>
      </div>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-text-primary mb-2">Find Your Doctor</h1>
          <p className="text-text-secondary">
            Browse through our network of qualified healthcare professionals and book your appointment today.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <SearchBar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onSearch={handleSearch}
          />
        </div>

        {/* Filter Chips */}
        <FilterChips
          filters={filters}
          onRemoveFilter={handleRemoveFilter}
          onClearAll={handleClearAllFilters}
        />

        {/* Main Layout */}
        <div className="flex gap-8 mt-8">
          {/* Desktop Filter Sidebar */}
          <FilterSidebar
            filters={filters}
            onFilterChange={handleFilterChange}
            onClearFilters={handleClearAllFilters}
            isOpen={isFilterOpen}
            onClose={() => setIsFilterOpen(false)}
          />

          {/* Main Content Area */}
          <div className="flex-1 min-w-0">
            {/* Controls Bar */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                {/* Mobile Filter Button */}
                <Button
                  variant="outline"
                  onClick={() => setIsFilterOpen(true)}
                  iconName="Filter"
                  iconPosition="left"
                  className="lg:hidden"
                >
                  Filters
                </Button>
                
                <div className="hidden sm:block text-sm text-text-secondary">
                  {filteredDoctors?.length} doctors found
                </div>
              </div>

              {/* Sort Dropdown */}
              <SortDropdown
                sortBy={sortBy}
                onSortChange={setSortBy}
              />
            </div>

            {/* Doctor Grid */}
            <DoctorGrid
              doctors={filteredDoctors}
              loading={loading}
              onBookNow={handleBookNow}
              onLoadMore={handleLoadMore}
              hasMore={hasMore}
            />
          </div>
        </div>
      </div>
      {/* Booking Modal */}
      <BookingModal
        doctor={selectedDoctor}
        isOpen={isBookingModalOpen}
        onClose={() => {
          setIsBookingModalOpen(false);
          setSelectedDoctor(null);
        }}
      />
    </div>
  );
};

export default DoctorListing;