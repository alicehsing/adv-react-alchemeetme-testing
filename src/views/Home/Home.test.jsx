import { getByRole, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Profile from '../../components/Profile/Profile'
import Home from './Home';

const user = {
  id: 1,
  created_at: '2021-12-13T00:17:29+00:00',
  name: 'Vonta',
  avatar: 'https://thumbs.gfycat.com/NiceRequiredGrunion-size_restricted.gif',
  header: 'https://static.wikia.nocookie.net/naruto/images/5/50/Team_Kakashi.png',
  likes: ['React', 'Anime', 'Traveling', 'Living', 'Tower Defense Games', 'Card Games'],
  motto: 'Res Non Verba',
  color: 'crimson',
}

describe('profile', () => {
  test('Should render the user profile', async () => {
    render(
      <MemoryRouter>
        <Home user={user} />
      </MemoryRouter>
    );

    // Find and check name = Vonta
    const name = screen.getByRole('heading', { name: 'Vonta' });
    expect(name.textContent).toEqual('Vonta');

    // Find and check for motto = 'Res Non Verba'
    const motto = screen.getByLabelText('motto')
    // const motto = screen.getByText('Res Non Verba');
    expect(motto.textContent).toEqual('Res Non Verba');

    // Find and check for "Interests" heading
    const interestHeading = screen.getByText('Interests');
    expect(interestHeading).toBeInTheDocument();

    // Find and check for avatar
    const avatar = screen.getByAltText('avatar');
    expect(avatar).toBeInTheDocument();

    // Find and check for header image
    const header = screen.getByAltText('header');
    expect(header).toBeInTheDocument();

    // Find and check for list of user likes
    const userLikes = screen.getAllByRole('listitem');
    expect(userLikes.length).toEqual(6);
  })

 
})


