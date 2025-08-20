import React from 'react';
import Icon from '../../../components/AppIcon';

const ReviewsTab = ({ doctor }) => {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex items-center space-x-1">
        {Array(fullStars)?.fill()?.map((_, i) => (
          <Icon key={i} name="Star" size={14} className="text-yellow-400 fill-current" />
        ))}
        {hasHalfStar && (
          <Icon name="Star" size={14} className="text-yellow-400 fill-current opacity-50" />
        )}
        {Array(emptyStars)?.fill()?.map((_, i) => (
          <Icon key={i} name="Star" size={14} className="text-gray-300" />
        ))}
      </div>
    );
  };

  const formatDate = (dateString) => {
    return new Date(dateString)?.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Calculate rating distribution
  const ratingCounts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  doctor?.reviews?.forEach(review => {
    ratingCounts[review.rating]++;
  });

  const totalReviews = doctor?.reviews?.length || 0;

  return (
    <div className="space-y-6">
      {/* Rating Overview */}
      <div className="medical-card p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-8">
          {/* Overall Rating */}
          <div className="text-center lg:text-left mb-6 lg:mb-0">
            <div className="text-4xl font-bold text-text-primary mb-2">
              {doctor?.rating}
            </div>
            <div className="flex items-center justify-center lg:justify-start mb-2">
              {renderStars(doctor?.rating)}
            </div>
            <p className="text-text-secondary text-sm">
              Based on {doctor?.reviewCount} reviews
            </p>
          </div>

          {/* Rating Breakdown */}
          <div className="flex-1">
            <h4 className="font-semibold text-text-primary mb-3">Rating Distribution</h4>
            <div className="space-y-2">
              {[5, 4, 3, 2, 1]?.map((rating) => {
                const count = ratingCounts?.[rating];
                const percentage = totalReviews > 0 ? (count / totalReviews) * 100 : 0;
                
                return (
                  <div key={rating} className="flex items-center space-x-3">
                    <span className="text-sm text-text-secondary w-6">{rating}</span>
                    <Icon name="Star" size={14} className="text-yellow-400 fill-current" />
                    <div className="flex-1 bg-muted rounded-full h-2">
                      <div
                        className="bg-yellow-400 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <span className="text-sm text-text-secondary w-8 text-right">
                      {count}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* Individual Reviews */}
      <div>
        <h3 className="text-lg font-semibold text-text-primary mb-4">Patient Reviews</h3>
        <div className="space-y-4">
          {doctor?.reviews?.map((review) => (
            <div key={review?.id} className="medical-card p-5">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-primary">
                      {review?.patientName?.split(' ')?.map(n => n?.[0])?.join('')}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h5 className="font-medium text-text-primary">
                        {review?.patientName}
                      </h5>
                      {review?.verified && (
                        <div className="flex items-center space-x-1">
                          <Icon name="CheckCircle" size={14} className="text-success" />
                          <span className="text-xs text-success font-medium">Verified</span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center space-x-2 mt-1">
                      {renderStars(review?.rating)}
                      <span className="text-sm text-text-secondary">
                        {formatDate(review?.date)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-text-secondary leading-relaxed">
                {review?.comment}
              </p>

              {/* Helpful Actions */}
              <div className="flex items-center space-x-4 mt-4 pt-3 border-t border-border">
                <button className="flex items-center space-x-2 text-sm text-text-secondary hover:text-text-primary transition-colors">
                  <Icon name="ThumbsUp" size={14} />
                  <span>Helpful</span>
                </button>
                <button className="flex items-center space-x-2 text-sm text-text-secondary hover:text-text-primary transition-colors">
                  <Icon name="Flag" size={14} />
                  <span>Report</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Reviews */}
        <div className="text-center mt-6">
          <button className="px-6 py-2 border border-border rounded-lg text-text-secondary hover:text-text-primary hover:border-text-secondary transition-colors">
            Load More Reviews
          </button>
        </div>
      </div>
      {/* Write Review CTA */}
      <div className="medical-card p-6 text-center">
        <h4 className="font-semibold text-text-primary mb-2">Share Your Experience</h4>
        <p className="text-text-secondary mb-4">
          Help other patients by sharing your experience with Dr. {doctor?.name?.split(' ')?.pop()}
        </p>
        <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
          Write a Review
        </button>
      </div>
    </div>
  );
};

export default ReviewsTab;