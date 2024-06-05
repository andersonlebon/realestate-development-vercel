import React from 'react';
import {
	Navbar,
	Collapse,
	Typography,
	IconButton,
	List,
	ListItem,
	Menu,
	MenuHandler,
	MenuList,
	MenuItem,
	MenuProps,
} from '@material-tailwind/react';
import {
	ChevronDownIcon,
	Bars3Icon,
	XMarkIcon,
} from '@heroicons/react/24/outline';
import {
	Bars4Icon,
	GlobeAmericasIcon,
	NewspaperIcon,
	PhoneIcon,
	RectangleGroupIcon,
	SquaresPlusIcon,
	SunIcon,
	TagIcon,
	UserGroupIcon,
} from '@heroicons/react/24/solid';
import { DownOutlined, SearchOutlined, SelectOutlined } from '@ant-design/icons';
import { Cascader, CascaderProps, Dropdown, Flex, Space } from 'antd';
import RangeSlider from './rangePicker';
import { MdApartment } from 'react-icons/md';
import { BsHousesFill } from 'react-icons/bs';
import { GiIsland } from 'react-icons/gi';  
import { kigaliResidences } from '@/constents';

const navListMenuItems = [
    {
      title: 'Apartments',
      description: 'Find modern apartments for rent or sale.',
      icon: <MdApartment />

    },
    {
      title: 'Houses',
      description: 'Explore houses for sale or rent.',
      icon: <BsHousesFill />
    },
    {
      title: 'Commercial Properties',
      description: 'Discover office spaces, retail outlets, and more.',
      icon: <MdApartment />
    },
    {
      title: 'Vacation Rentals',
      description: 'Plan your getaway with vacation rental options.',
      icon: <BsHousesFill />
    },
    {
      title: 'Land and Plots',
      description: 'Find land and plots for development.',
      icon: <GiIsland />

    },
  ];
  
  export default navListMenuItems;
  
function NavListMenu({navListMenuItems}) {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
	const renderItems = navListMenuItems.map(
		({ icon, title, description }, key) => (
			<a href='#' key={key}>
				<MenuItem className='flex items-center gap-3 rounded-lg'>
					<div className='flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 '>
						{icon}
					</div>
					<div>
						<Typography
							variant='h6'
							color='blue-gray'
							className='flex items-center text-sm font-bold'
						>
							{title}
						</Typography>
						<Typography
							variant='paragraph'
							className='text-xs !font-medium text-blue-gray-500'
						>
							{description}
						</Typography>
					</div>
				</MenuItem>
			</a>
		)
	);

	return (
		<React.Fragment>
			<Menu
				open={isMenuOpen}
				handler={setIsMenuOpen}
				offset={{ mainAxis: 20 }}
				placement='bottom'
				allowHover={true}
			>
				<MenuHandler>
					<Typography as='div' variant='small' className='font-medium'>
						<ListItem
							className='flex items-center gap-2 py-2 pr-4 font-medium text-gray-900'
							selected={isMenuOpen || isMobileMenuOpen}
							onClick={() => setIsMobileMenuOpen((cur) => !cur)}
						>
							Categories
							<ChevronDownIcon
								strokeWidth={2.5}
								className={`hidden h-3 w-3 transition-transform lg:block ${
									isMenuOpen ? 'rotate-180' : ''
								}`}
							/>
							<ChevronDownIcon
								strokeWidth={2.5}
								className={`block h-3 w-3 transition-transform lg:hidden ${
									isMobileMenuOpen ? 'rotate-180' : ''
								}`}
							/>
						</ListItem>
					</Typography>
				</MenuHandler>
				<MenuList className='hidden max-w-screen-xl rounded-xl lg:block'>
					<ul className='grid grid-cols-3 gap-y-2 outline-none outline-0'>
						{renderItems}
					</ul>
				</MenuList>
			</Menu>
			<div className='block lg:hidden'>
				<Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
			</div>
		</React.Fragment>
	);
}

interface DataNodeType {
    value: string;
    label: string;
    children?: DataNodeType[];
  }
  

function NavList() {
	const items: MenuProps['items'] = [
		{
			key: '1',
			label: 'Item 1',
		},
		{
			key: '2',
			label: 'Item 2',
		},
		{
			key: '3',
			label: 'Item 3',
		},
	];

    const filter = (inputValue: string, path: DefaultOptionType[]) =>
    path.some(
      (option) => (option.label as string).toLowerCase().indexOf(inputValue.toLowerCase()) > -1,
    );

  

	return (
		<Flex gap={20}>
			<List className='mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1'>
				<NavListMenu  navListMenuItems={navListMenuItems}/>
				<Cascader options={kigaliResidences as CascaderProps<DataNodeType>['options']} 
					placeholder="Please select your habitual residence"
				  suffixIcon={<SelectOutlined className='site-form-item-icon' />}
					showSearch={{ filter }}
					onSearch={(value) => console.log(value)}
					
				/>
			</List>
			<Dropdown
				menu={{
					items,
					selectable: true,
					defaultSelectedKeys: ['3'],
				}}
			>
				<Space>
					Selectable
					<DownOutlined />
				</Space>
			</Dropdown>
			<RangeSlider />
			<button
				//   onClick={() => {
				//     setLoginModal(false)
				//     setRegisterModal(true)
				//   }}
				className='flex w-full px-10 gap-2 justify-center align-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
			>
				<SearchOutlined className='text-2xl' />
				<span>Search</span>
			</button>
            
		</Flex>
	);
}

export function MegaMenuWithHover() {
	const [openNav, setOpenNav] = React.useState(false);

	React.useEffect(() => {
		window.addEventListener(
			'resize',
			() => window.innerWidth >= 960 && setOpenNav(false)
		);
	}, []);

	return (
		<Navbar className='mx-auto px-4 py-2'>
			<div className='flex items-center justify-between text-blue-gray-900'>
				<div className='block'>
					<NavList />
				</div>
			</div>
			<Collapse open={openNav}>
				<NavList />
			</Collapse>
		</Navbar>
	);
}
