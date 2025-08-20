import React from 'react';
import DoctorCard from './DoctorCard';

const DoctorGrid = ({ doctors, loading, onBookNow, onLoadMore, hasMore }) => {
  if (loading && doctors?.length === 0) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {[...Array(9)]?.map((_, index) => (
          <div key={index} className="medical-card animate-pulse">
            <div className="p-6">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-16 h-16 bg-muted rounded-full"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-5 bg-muted rounded w-3/4"></div>
                  <div className="h-4 bg-muted rounded w-1/2"></div>
                  <div className="h-4 bg-muted rounded w-2/3"></div>
                </div>
              </div>
              <div className="space-y-2 mb-4">
                <div className="h-4 bg-muted rounded w-full"></div>
                <div className="h-4 bg-muted rounded w-full"></div>
                <div className="h-4 bg-muted rounded w-3/4"></div>
              </div>
              <div className="h-12 bg-muted rounded mb-4"></div>
              <div className="h-10 bg-muted rounded"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (doctors?.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-24 h-24 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center">
          <svg className="w-12 h-12 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29.82-5.877 2.172M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.875a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-text-primary mb-2">No doctors found</h3>
        <p className="text-text-secondary mb-6 max-w-md mx-auto">
          We couldn't find any doctors matching your search criteria. Try adjusting your filters or search terms.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-smooth">
            Clear Filters
          </button>
          <button className="px-6 py-2 border border-border text-text-primary rounded-lg hover:bg-muted transition-smooth">
            Browse All Doctors
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-text-secondary">
          Showing <span className="font-medium text-text-primary">{doctors?.length}</span> doctors
        </p>
      </div>
      {/* Doctor Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {doctors?.map((doctor) => (
          <DoctorCard
            key={doctor?.id}
            doctor={doctor}
            onBookNow={onBookNow}
          />
        ))}
      </div>
      {/* Loading More Skeleton Cards */}
      {loading && doctors?.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {[...Array(3)]?.map((_, index) => (
            <div key={`loading-${index}`} className="medical-card animate-pulse">
              <div className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-16 h-16 bg-muted rounded-full"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-5 bg-muted rounded w-3/4"></div>
                    <div className="h-4 bg-muted rounded w-1/2"></div>
                    <div className="h-4 bg-muted rounded w-2/3"></div>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="h-4 bg-muted rounded w-full"></div>
                  <div className="h-4 bg-muted rounded w-full"></div>
                  <div className="h-4 bg-muted rounded w-3/4"></div>
                </div>
                <div className="h-12 bg-muted rounded mb-4"></div>
                <div className="h-10 bg-muted rounded"></div>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* Load More Button */}
      {hasMore && !loading && (
        <div className="text-center pt-8">
          <button
            onClick={onLoadMore}
            className="px-8 py-3 bg-surface border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-smooth font-medium"
          >
            Load More Doctors
          </button>
        </div>
      )}
      {/* End of Results */}
      {!hasMore && doctors?.length > 0 && (
        <div className="text-center pt-8 pb-4">
          <p className="text-sm text-text-secondary">
            You've reached the end of the results
          </p>
        </div>
      )}
    </div>
  );
};

export default DoctorGrid;