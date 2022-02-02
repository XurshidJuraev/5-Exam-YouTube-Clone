import React from 'react';
import './Profile.scss'
import '../Home/Home.scss'
import { useParams, useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import useToken from '../../Hooks/useToken';
import { NavLink } from 'react-router-dom'
import Favourite from '../../Assets/Images/Favourites.svg';
import Games from '../../Assets/Images/Games.svg';
import History from '../../Assets/Images/History.svg';
import HomeImage from '../../Assets/Images/Home.svg';
import Library from '../../Assets/Images/Library.svg';
import LikedVideos from '../../Assets/Images/LikedVideos.svg';
import Logo from '../../Assets/Images/Logo.svg';
import Menu from '../../Assets/Images/Menu.svg';
import Music from '../../Assets/Images/Music.svg';
import ShowMore from '../../Assets/Images/ShowMore.svg';
import Subscriptions from '../../Assets/Images/Subscriptions.svg';
import Trending from '../../Assets/Images/Trending.svg';
import WatchLater from '../../Assets/Images/WatchLater.svg';
import AllVideo from '../../Assets/Images/AllVideo.svg';
import NewVideo from '../../Assets/Images/NewVideo.svg';
import qongiroqcha from '../../Assets/Images/qongiroqcha.svg';
import userPic from '../../Assets/Images/Userpic.png';
import Settings from '../../Assets/Images/Settings.svg';
import ChannelBanner from '../../Assets/Images/ChannelBanner.png';
import GlobalVideo from '../../Assets/Images/GlobalVideo.png';
import Sharla from '../../Assets/Images/Sharla.png';
import Lampa from '../../Assets/Images/Lampa.png';
import TuvakdagiGuul from '../../Assets/Images/TuvkdagiGul.png';
import TarvuzVideo from '../../Assets/Images/TarvuzVideo.png';
import QoraKamalak from '../../Assets/Images/QoraKamalak.png';
import Arqon from '../../Assets/Images/Arqon.png';




function Profile() {
	const navigate = useNavigate();
	const { id } = useParams();
	const [setToken] = useToken(true);
	const [user, setUser] = React.useState({});
	const [users, setUsers] = React.useState([]);
	const [isLoading, setLoading] = React.useState(true);

	React.useEffect(() => {
		fetch('https://reqres.in/api/users/' + id)
			.then((response) => response.json())
			.then((data) => {
				setUser(data?.data);
				setLoading(false);
			});
	}, [id]);
	React.useEffect(() => {
		fetch('https://reqres.in/api/users/' + id)
			.then((response) => response.json())
			.then((data) => {
				setUsers(data?.data);
				setLoading(false);
			});
	}, [id]);

	if (isLoading) {
		return <h1>Loading ... </h1>;
	} else {
		return (
			<>

		<header className='container header'>
				<div className="flex jcsb">
					<div className="flex">
					<div className="meny">
					<img className='meny' src={Menu} alt="YouTubeImage" />
					</div>
					<div className="logo">
					<img className='logo' src={Logo} alt="YouTubeImage" />
					</div>
					</div>

					<div className="input">
					<input className='header-input' type="search" placeholder='   Search'/>
					</div>

				<div className="header-newVideo flex jcsb">
					<img className='flex-headerImage' src={NewVideo} alt="YouTubeImage" />
					<img className='flex-headerImage' src={AllVideo} alt="YouTubeImage" />
					<img className='flex-headerImage' src={qongiroqcha} alt="YouTubeImage" />
					<img className='flex-headerImage2' src={userPic} alt="YouTubeImage" />
				</div>
				</div>
		</header>

		<div className="container nav">
				<div className="hedr-margn">
				<NavLink className='tdn' to={'/'}>
					<div className="flex">
						<img src={HomeImage} alt="YouTubeImage" />
						<p className='home'>Home</p>
					</div>
				</NavLink>
				<div className="flex">
				<img src={Trending} alt="YouTubeImage" />
				<p className='hader-wit'>Trending</p>
				</div>
				<div className="flex">
				<img src={Subscriptions} alt="YouTubeImage" />
				<p className='hader-wit'>Subscriptions</p>
				</div>
				</div>
				<div className="flex">
				<img src={Library} alt="YouTubeImage" />
				<p className='hader-wit'>Library</p>
				</div>
				<div className="flex">
				<img src={History} alt="YouTubeImage" />
				<p className='hader-wit'>History</p>
				</div>
				<div className="flex">
				<img src={WatchLater} alt="YouTubeImage" />
				<p className='hader-wit'>WatchLater</p>
				</div>
				<div className="flex">
				<img src={Favourite} alt="YouTubeImage" />
				<p className='hader-wit'>Favourite</p>
				</div>
				<div className="flex">
				<img src={LikedVideos} alt="YouTubeImage" />
				<p className='hader-wit'>Liked Videos</p>
				</div>
				<div className="flex">
				<img src={Music} alt="YouTubeImage" />
				<p className='hader-wit'>Music</p>
				</div>
				<div className="flex">
				<img src={Games} alt="YouTubeImage" />
				<p className='hader-wit'>Games</p>
				</div>
				<div className="flex">
				<img src={ShowMore} alt="YouTubeImage" />
				<p className='hader-wit'>Show More</p>
				</div>
				<h3>Subscriptions</h3>

				{users.length > 0 &&
					users.map((user) => (
						<NavLink className='tdn' to={'channel/' + user.id}>
							<div className="flex">
							<img className='user-imag_hedr' src={user.avatar} alt="YouTubeImage" />
							<p className='hader-wit'>{user.first_name}</p>
						</div>
						</NavLink>
					))}
				<div className="hedr-margn2">
					<div className="flex">
					<img src={Settings} alt="YouTubeImage" />
					<p className='hader-wit'>Settings</p>
					</div>
				</div>
			</div>

			<main className='main alik'>

				<img src={ChannelBanner} alt="YouTubeImage" />
				<div className="flex aic">
				<img className='hedr-user-img' src={user.avatar} alt="YouTubeImage" />
				<div className="klonf">
				<p className='hader-dolli'>{user.first_name + ' ' + user.last_name}</p>
				<p className='box-like grtdfe'>245K subscribed</p>
				</div>
				</div>

				<ul className='home-list'>
					<li><p className='home'>Home</p></li>
					<li><p className='hader-wit'>Videos</p></li>
					<li><p className='hader-wit'>Playlists</p></li>
					<li><p className='hader-wit'>Channels</p></li>
					<li><p className='hader-wit'>Discussion</p></li>
					<li><p className='hader-wit'>About</p></li>
				</ul>
				
					{/* <img
						src={user.avatar}
						width={400}
						height={400}
						alt={user.first_name + "'s avatar"}
						/>

						<h1 className='center'>{user.first_name + ' ' + user.last_name}</h1>
					<h2 className='center'>{user.email}</h2> */}
			</main>
					{/* <Stack spacing={2} direction="row">
						<Button onClick={() => navigate(-1)} variant="contained">Home</Button>
					</Stack>
					<Button onClick={() => setToken(false)}>
						Log out
					</Button> */}
				

				{/* <div className="aginu">


					<img
						src={user.avatar}
						width={400}
						height={400}
						alt={user.first_name + "'s avatar"}
						/>

						<h1 className='center'>{user.first_name + ' ' + user.last_name}</h1>
					<h2 className='center'>{user.email}</h2>
				</div> */}
			</>
		);
	}
}

export default Profile;
