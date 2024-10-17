import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Cast, Crew } from '../../types';
import CreditInfoCard from './CreditInfoCard';

const imgBaseUrl = import.meta.env.VITE_TMDB_IMAGE_BASE_URL;

const mockCast: Cast = {
  id: 1,
  cast_id: 1,
  name: 'John Doe (Main Character)',
  profile_path: '/profile.jpg',
  character: 'Main Character',
  order: 1,
  adult: false,
  gender: 2,
  credit_id: '1',
  known_for_department: 'Acting',
  original_name: 'John Doe',
  popularity: 10,
};

const mockCrew: Crew = {
  id: 2,
  credit_id: '2',
  name: 'Jane Smith (Director)',
  profile_path: '/profile2.jpg',
  job: 'Director',
  department: 'Directing',
  adult: false,
  gender: 1,
  known_for_department: 'Directing',
  popularity: 20,
  original_name: 'Jane Smith',
};

describe('CreditInfoCard', () => {
  it('should render cast member correctly', () => {
    render(<CreditInfoCard credit={mockCast} />);
    
    const imgElement = screen.getByAltText(mockCast.name);
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', `${imgBaseUrl}${mockCast.profile_path}`);
    
    const nameElement = screen.getByText(mockCast.name);
    expect(nameElement).toBeInTheDocument();
    
    const characterElement = screen.getByText(mockCast.character);
    expect(characterElement).toBeInTheDocument();
  });

  it('should render crew member correctly', () => {
    render(<CreditInfoCard credit={mockCrew} />);
    
    const imgElement = screen.getByAltText(mockCrew.name);
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', `${imgBaseUrl}${mockCrew.profile_path}`);
    
    const nameElement = screen.getByText(mockCrew.name);
    expect(nameElement).toBeInTheDocument();
    
    const jobElement = screen.getByText(mockCrew.job);
    expect(jobElement).toBeInTheDocument();
  });

  it('should render placeholder when profile_path is missing', () => {
    const mockCreditWithoutProfile: Cast = { ...mockCast, profile_path: '' };
    render(<CreditInfoCard credit={mockCreditWithoutProfile} />);
    
    const placeholderElement = screen.getByText(mockCreditWithoutProfile.name).previousSibling;
    expect(placeholderElement).toBeInTheDocument();
    expect(placeholderElement).toHaveClass('profile-photo');
  });
});