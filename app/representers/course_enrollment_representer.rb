module CourseEnrollmentRepresenter
  include Roar::Representer::JSON
  include Roar::Representer::Feature::Hypermedia

  property :state
  property :id
  property :email #works only for UCI
  property :created_at
  property :token

  link :self do
    api_course_enrollment_url(self.course, self)
  end

  link :course do
    api_course_url(self.course)
  end

  link :environment do
    api_course_url(self.course.environment)
  end

  link :user do
    user_url(self.user) if self.user
  end
end
