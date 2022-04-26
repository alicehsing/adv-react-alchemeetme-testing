import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';
import App from './App';

const user = {
  id: 1,
  created_at: '2021-12-13T00:17:29+00:00',
  name: 'Vonta',
  avatar: 'https://thumbs.gfycat.com/NiceRequiredGrunion-size_restricted.gif',
  header: 'https://static.wikia.nocookie.net/naruto/images/5/50/Team_Kakashi.png',
  likes: ['React', 'Anime', 'Traveling', 'Living', 'Tower Defense Games', 'Card Games'],
  motto: 'Res Non Verba',
  color: 'crimson',
};

describe('App', () => {
  it('Should render the header', async () => {
    render(
        <MemoryRouter>
          <App user={user} />
        </MemoryRouter>
    );

    // Find  and check an image with an alt="Alchemy Logo"
    const img = screen.getByAltText('Alchemy Logo');
    expect(img).toBeInTheDocument();
    
    // Find and check the profile name

    const headerText = await screen.findByLabelText(/meet vonta!/i);
    expect(headerText).toBeInTheDocument();
    // const profileName = await screen.findByText('Vonta');
    // expect(profileName.textContent).toEqual('Vonta');

    // Find and check background color = var(---grey)
    const headerBgColor = screen.getByRole('banner');
    expect(headerBgColor).toHaveStyle({
      backgroundColor: 'var(--grey)'
    });
  });
});

