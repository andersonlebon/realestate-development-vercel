'use client';
import React, { useState } from 'react';
import { Row, Col, Tab } from 'react-bootstrap';
import {
	FaUserAlt,
	FaEnvelope,
	FaArrowDown,
	FaPencilAlt,
	FaPhoneAlt,
} from 'react-icons/fa';
import { Checkbox, Form, Input, message } from 'antd';
import Link from 'next/link';
import ImageUpload from '@/components/shared/images/upload';
import usePlacesAutocomplete, {
	getGeocode,
	getLatLng,
	getDetails,
} from 'use-places-autocomplete';
import Map from './map';
import { useCreateProperty } from '@/hooks/properties';
import Loading from '@/components/loadings';
import { useAuthContext } from '@/context/auth';


function MyAccount() {
	const [fileList, setFileList] = useState<UploadFile[]>([]);
	const [videoList, setVideoList] = useState<UploadFile[]>([]);
	const [location, setLocation] = useState({ position: null, details: null });
	const [mapData, setMapdata] = useState({ lat: null, lng: null });
	const { mutate: createProperty, isPending } = useCreateProperty();
	const { role } = useAuthContext();

	const {
		ready,
		value,
		setValue,
		suggestions: { status, data },
		clearSuggestions,
	} = usePlacesAutocomplete({
		callbackName: 'initMap',
	});

	const formFields = {
		propertyDescription: [
			{
				name: 'title',
				label: '*Title (mandatory)',
				placeholder: 'Title',
				rules: [
					{ required: true, message: 'The property name must be present' },
				],
				component: <Input type='text' />,
			},
			{
				name: 'description',
				label: 'Description',
				placeholder: 'Description',
				rules: [{ required: true, message: 'Description is required' }],
				component: <Input.TextArea />,
			},
		],
		propertyPrice: [
			{
				name: 'price',
				label: 'Price',
				placeholder: 'Price in $ (only numbers)',
				rules: [
					{ required: true, message: 'Price is required' },
					{ pattern: /^[0-9]*$/, message: 'Please enter only numbers' },
				],
				component: <Input type='text' />,
			},
			{
				name: 'afterPriceLabel',
				label: 'After Price Label',
				placeholder: 'After Price Label (ex: /month)',
				rules: [{ required: true, message: 'After Price Label is required' }],
				component: <Input type='text' />,
			},
			// Add more fields for this section as needed
		],
		// Add more sections as needed
	};

	// enum property_type: {
  //   apartment: 0, duplex_house: 1, commercial: 3, luxary_vilas: 4, picture_studio: 5, office: 6,
  //   plot: 7, industrial: 8, retail: 9, hotel: 10, resort: 11, farm: 12, villa: 13, house: 14
  // }, 

	const propertyTypes = [
		'Apartment',
		'Duplex_House',
		'Commercial',
		'Luxary_Vilas',
		'Picture_Studio', 'Office', 'Plot', 'Industrial', 'Retail', 'Hotel', 'Resort', 'Farm', 'Villa', 'House'

	];

	const transactionTypes = ['None', 'Rentals', 'Sales'];

	const propertyStatuses = [
		'no status',
		'Active',
		'hot offer',
		'new offer',
		'open house',
		'sold',
	];

	const handleSelect = async (val: string) => {
		setValue(val, false);
		clearSuggestions();

		const results = await getGeocode({ address: val });
		const { lat, lng } = await getLatLng(results[0]);
		setMapdata({ lat, lng });
	};

	const setMapdataFromParent = (position, details) => {
		setLocation({
			position,
			details,
		});
	};

	const handleUploardAvata: UploadProps['onChange'] = async ({
		fileList: newFileList,
	}) => {
		setFileList(newFileList);
	};

	const handleUploardvideo: UploadProps['onChange'] = async ({
		fileList: newFileList,
	}) => {
		setVideoList(newFileList);
	};

	const onFinish = (values) => {
		if (fileList.length < 3) return message.error('At least 3 images are required');
		
		const newData = {details: [], role, feature: [], images: fileList.map(image => image.response), videos: videoList.map(video => video.response)}

		const details = Object.entries(values).forEach(([key, value]) => {
			if (key.includes('details') && value){
				newData.details = [...newData.details, { [key.toLocaleLowerCase().slice(8)]: value}]
			} else if (key.includes('feature') && value){
				newData.feature = [...newData.feature, key.toLocaleLowerCase().slice(8)]
			} else if (key.includes('location') && value){
				newData.location = {...newData.location, [key.toLocaleLowerCase().slice(9)]: value}
			
		}else {
				if (value) newData[key.toLocaleLowerCase()] = value
			}
		

		})

		createProperty(newData, {
			onSuccess: () => {
				message.success('Property created successfully');
			},
			onError: () => {
				message.error('An error occured while creating the property');
			}
		});
		
	};
	if (isPending) return <Loading />
	return (
		<>
			<Tab.Pane eventKey='new-property'>
				<Form initialValues={{ remember: true }} onFinish={onFinish}>
					<div className='ltn__myaccount-tab-content-inner'>
						<h6 className="my-3">Property Description</h6>
						<Row>
							<Col md={12}>
								<div className='input-item input-item-textarea ltn__custom-icon'>
									<Form.Item
										name='title'
										rules={[
											{
												required: true,
												message: 'The property name must be present',
											},
										]}
									>
										<Input
											type='text'
											name='title'
											placeholder='*Title (mandatory)'
										/>
									</Form.Item>
									<span className='inline-icon'>
										<FaPencilAlt />
									</span>
								</div>
								<div className='input-item input-item-textarea ltn__custom-icon'>
									<Form.Item
										name='description'
										rules={[
											{ required: true, message: 'Description is required' },
										]}
									>
										<textarea name='description' placeholder='Description' />
									</Form.Item>
									<span className='inline-icon'>
										<FaPencilAlt />
									</span>
								</div>
							</Col>
						</Row>
						<h6 className="my-3">Select Categories</h6>
						<Row gutter={16}>
							<Col xs={12} md={6} lg={4}>
								<div className='input-item ltn__custom-icon'>
									<Form.Item
										name='property_type'
										rules={[
											{ required: true, message: 'Property Type is required' },
										]}
									>
										<select className='nice-select' name='property_type'>
											{propertyTypes.map((type, index) => (
												<option value={type} key={index}>
													{type}
												</option>
											))}
										</select>
									</Form.Item>
									<span className='inline-icon'>
										<FaArrowDown />
									</span>
								</div>
							</Col>
							<Col xs={12} md={6} lg={4}>
								<div className='input-item ltn__custom-icon'>
									<Form.Item
										name='flag'
										rules={[
											{
												required: true,
												message: 'Transaction Type is required',
											},
										]}
									>
										<select className='nice-select' name='flag'>
											<option >Select Type</option>
											<option value='rent'>For rent</option>
											<option value='sale'>For sale</option>
										</select>
									</Form.Item>
									<span className='inline-icon'>
										<FaArrowDown />
									</span>
								</div>
							</Col>
							<Col xs={12} md={6} lg={4}>
								<div className='input-item ltn__custom-icon'>
									<Form.Item
										name='status'
										rules={[
											{
												required: true,
												message: 'Property Status is required',
											},
										]}
									>
										<select className='nice-select' name='status'
										>
											<option>Status</option>
											<option value='available'>Available</option>
											<option value='in_deal'>In deal</option>
											<option value='rented'>Rented</option>
											<option value='archieved'>Archieved</option>
										</select>
									</Form.Item>
									<span className='inline-icon'>
										<FaArrowDown />
									</span>
								</div>
							</Col>
						</Row>
						<h6 className="my-3">Property Price</h6>
						<Row gutter={16}>
							<Col xs={12} md={6}>
								<div className='input-item input-item-textarea ltn__custom-icon'>
									<Form.Item
										name='price'
										rules={[
											{ required: true, message: 'Price is required' },
											{
												pattern: /^[0-9]*$/,
												message: 'Please enter only numbers',
											},
										]}
									>
										<Input
											type='number'
											name='price'
											placeholder='Price in $ (only numbers)'
										/>
									</Form.Item>
								</div>
							</Col>
							<Col xs={12} md={6}>
								<div className='input-item ltn__custom-icon '>
									<Form.Item name='price_label'>
										<select className='nice-select w-full' name='price_label'>
											<option value=''>Price label</option>
											{['Year', 'Month', 'Day', 'None'].map((type, index) => (
												<option value={type} key={index}>
													{type}
												</option>
											))}
										</select>
									</Form.Item>
									<span className='inline-icon'>
										<FaArrowDown />
									</span>
								</div>
							</Col>
							<Col xs={12} md={6}>
								<div className='input-item input-item-textarea ltn__custom-icon'>
									<Form.Item
										name='before_price_label'
										rules={[
											{
												required: true,
												message: 'Before Price Label is required',
											},
										]}
									>
										<Input
											type='number'
											name='discount'
											placeholder='Discount (only numbers)'
										/>
									</Form.Item>
									<span className='inline-icon'>
										<FaPencilAlt />
									</span>
								</div>
							</Col>
							<Col xs={12} md={6}>
								<div className='input-item input-item-textarea ltn__custom-icon'>
									<Form.Item
										name='yearlyTaxRate'
										rules={[
											{
												required: true,
												message: 'Yearly Tax Rate is required',
											},
										]}
									>
										<Input
											type='number'
											name='yearlyTaxRate'
											placeholder='Yearly Tax Rate'
										/>
									</Form.Item>
									<span className='inline-icon'>
										<FaPencilAlt />
									</span>
								</div>
							</Col>
						</Row>
						<h6 className="my-3">Listing Media</h6>
						<ImageUpload
							fileList={fileList}
							setFileList={setFileList}
							onChange={handleUploardAvata}
						/>
						<br />
						<p>
							<small>* At least 3 image is required</small>
							<br />
							<small>* Images might take longer to be processed.</small>
						</p>
						<h6 className="my-3">Video</h6>
						<ImageUpload
							fileList={videoList}
							setFileList={setVideoList}
							onChange={handleUploardvideo}
						/>

						<h6 className="my-3">Listing Location</h6>
						<Row>
							<Col xs={12} md={6}>
								<Form.Item name='location.province'>
									<div className='input-item input-item-textarea ltn__custom-icon'>
										<input
											type='text'
											name='location.province'
											placeholder='*Province'
										/>
										<span className='inline-icon'>
											<FaPencilAlt />
										</span>
									</div>
								</Form.Item>
							</Col>
							<Col xs={12} md={6}>
								<Form.Item name='location.district'>
									<div className='input-item input-item-textarea ltn__custom-icon'>
										<input
											type='text'
											name='location.district'
											placeholder='*District'
										/>
										<span className='inline-icon'>
											<FaPencilAlt />
										</span>
									</div>
								</Form.Item>
							</Col>
							<Col xs={12} md={6}>
								<Form.Item name='location.sector'>
									<div className='input-item input-item-textarea ltn__custom-icon'>
										<input type='text' name='location.sector' placeholder='*Sector' />
										<span className='inline-icon'>
											<FaPencilAlt />
										</span>
									</div>
								</Form.Item>
							</Col>
							<Col xs={12} md={6}>
								<Form.Item name='location.cell'>
									<div className='input-item input-item-textarea ltn__custom-icon'>
										<input type='text' name='location.cell' placeholder='*Cell' />
										<span className='inline-icon'>
											<FaPencilAlt />
										</span>
									</div>
								</Form.Item>
							</Col>
							<Col xs={12} md={6}>
								<Form.Item name='location.city'>
									<div className='input-item input-item-textarea ltn__custom-icon'>
										<input type='text' name='location.city' placeholder='*City' />
										<span className='inline-icon'>
											<FaPencilAlt />
										</span>
									</div>
								</Form.Item>
							</Col>
							<Col xs={12} md={6}>
								<Form.Item name='location.Zip'>
									<div className='input-item input-item-textarea ltn__custom-icon'>
										<input type='text' name='location.Zip' placeholder='*Zip' />
										<span className='inline-icon'>
											<FaPencilAlt />
										</span>
									</div>
								</Form.Item>
							</Col>

							<Col xs={12} md={6}>
								<Form.Item name='location.latitude'>
									<div className='input-item input-item-textarea ltn__custom-icon'>
										<input
											type='text'
											name='location.latitude'
											placeholder='Latitude (for Google Maps)'
										/>
										<span className='inline-icon'>
											<FaPencilAlt />
										</span>
									</div>
								</Form.Item>
							</Col>
							<Col xs={12} md={6}>
								<Form.Item name='location.longitude'>
									<div className='input-item input-item-textarea ltn__custom-icon'>
										<input
											type='text'
											name='location.longitude'
											placeholder='Longitude (for Google Maps)'
										/>
										<span className='inline-icon'>
											<FaPencilAlt />
										</span>
									</div>
								</Form.Item>
							</Col>
							
							<div className='col-lg-12'>
								<div className='property-details-google-map mb-60'>
									<Map
										position={mapData}
										setMapdataFromParent={setMapdataFromParent}
									/>
								</div>
							</div>
						</Row>
						<h6 className="my-3">Listing Details</h6>
						<Row>
							<Col xs={12} md={6}>
								<Form.Item
									name='details.Size'
									
								>
									<div className='input-item input-item-textarea ltn__custom-icon'>
										<Input
											type='text'
											name='details.Size'
											placeholder='Size in ft2 (*only numbers)'
										/>
										<span className='inline-icon'>
											<FaPencilAlt />
										</span>
									</div>
								</Form.Item>
							</Col>

							<Col xs={12} md={6}>
								<Form.Item
									name='details.LotSize'
									
								>
									<div className='input-item input-item-textarea ltn__custom-icon'>
										<Input
											type='text'
											name='details.LotSize'
											placeholder='Lot Size in ft2 (*only numbers)'
										/>
										<span className='inline-icon'>
											<FaPencilAlt />
										</span>
									</div>
								</Form.Item>
							</Col>

							<Col xs={12} md={6}>
								<Form.Item
									name='details.Rooms'
									
								>
									<div className='input-item input-item-textarea ltn__custom-icon'>
										<Input
											type='text'
											name='details.Rooms'
											placeholder='Rooms (*only numbers)'
										/>
										<span className='inline-icon'>
											<FaPencilAlt />
										</span>
									</div>
								</Form.Item>
							</Col>

							<Col xs={12} md={6}>
								<Form.Item
									name='details.Bedrooms'
									
								>
									<div className='input-item input-item-textarea ltn__custom-icon'>
										<Input
											type='text'
											name='details.Bedrooms'
											placeholder='Bedrooms (*only numbers)'
										/>
										<span className='inline-icon'>
											<FaPencilAlt />
										</span>
									</div>
								</Form.Item>
							</Col>

							<Col xs={12} md={6}>
								<Form.Item
									name='details.Bathrooms'
									
								>
									<div className='input-item input-item-textarea ltn__custom-icon'>
										<Input
											type='text'
											name='details.Bathrooms'
											placeholder='Bathrooms (*only numbers)'
										/>
										<span className='inline-icon'>
											<FaPencilAlt />
										</span>
									</div>
								</Form.Item>
							</Col>

							<Col xs={12} md={6}>
								<Form.Item
									name='details.CustomID'
									
								>
									<div className='input-item input-item-textarea ltn__custom-icon'>
										<Input
											type='text'
											name='details.CustomID'
											placeholder='Custom ID (*text)'
										/>
										<span className='inline-icon'>
											<FaPencilAlt />
										</span>
									</div>
								</Form.Item>
							</Col>

							<Col xs={12} md={6}>
								<Form.Item
									name='details.Garages'
									
								>
									<div className='input-item input-item-textarea ltn__custom-icon'>
										<Input
											type='text'
											name='details.Garages'
											placeholder='Garages (*text)'
										/>
										<span className='inline-icon'>
											<FaPencilAlt />
										</span>
									</div>
								</Form.Item>
							</Col>

							<Col xs={12} md={6}>
								<Form.Item
									name='details.YearBuilt'
									
								>
									<div className='input-item input-item-textarea ltn__custom-icon'>
										<Input
											type='text'
											name='details.YearBuilt'
											placeholder='Year Built (*numeric)'
										/>
										<span className='inline-icon'>
											<FaPencilAlt />
										</span>
									</div>
								</Form.Item>
							</Col>

							<Col xs={12} md={6}>
								<Form.Item
									name='details.GarageSize'
									
								>
									<div className='input-item input-item-textarea ltn__custom-icon'>
										<Input
											type='text'
											name='details.GarageSize'
											placeholder='Garage Size (*text)'
										/>
										<span className='inline-icon'>
											<FaPencilAlt />
										</span>
									</div>
								</Form.Item>
							</Col>

							<Col xs={12} md={6}>
								<Form.Item
									name='details.AvailableFrom'
									
								>
									<div className='input-item input-item-textarea ltn__custom-icon'>
										<Input
											type='text'
											name='details.AvailableFrom'
											placeholder='Available from (*date)'
										/>
										<span className='inline-icon'>
											<FaPencilAlt />
										</span>
									</div>
								</Form.Item>
							</Col>

							<Col xs={12} md={6}>
								<Form.Item
									name='details.Basement'
									
								>
									<div className='input-item input-item-textarea ltn__custom-icon'>
										<Input
											type='text'
											name='details.Basement'
											placeholder='Basement (*text)'
										/>
										<span className='inline-icon'>
											<FaPencilAlt />
										</span>
									</div>
								</Form.Item>
							</Col>

							<Col xs={12} md={6}>
								<Form.Item
									name='details.ExtraDetails'
									
								>
									<div className='input-item input-item-textarea ltn__custom-icon'>
										<Input
											type='text'
											name='details.ExtraDetails'
											placeholder='Extra Details (*text)'
										/>
										<span className='inline-icon'>
											<FaPencilAlt />
										</span>
									</div>
								</Form.Item>
							</Col>

							<Col xs={12} md={6}>
								<Form.Item
									name='details.Roofing'
									
								>
									<div className='input-item input-item-textarea ltn__custom-icon'>
										<Input
											type='text'
											name='details.Roofing'
											placeholder='Roofing (*text)'
										/>
										<span className='inline-icon'>
											<FaPencilAlt />
										</span>
									</div>
								</Form.Item>
							</Col>

							<Col xs={12} md={6}>
								<Form.Item
									name='details.ExteriorMaterial'
									
								>
									<div className='input-item input-item-textarea ltn__custom-icon'>
										<Input
											type='text'
											name='details.ExteriorMaterial'
											placeholder='Exterior Material (*text)'
										/>
										<span className='inline-icon'>
											<FaPencilAlt />
										</span>
									</div>
								</Form.Item>
							</Col>

							<Col xs={12} md={6}>
								<Form.Item
									name='details.StructureType'
									
								>
								<div className='input-item ltn__custom-icon'>
									<select className='nice-select' name="details.Structure_type">
										<option>Structure Type</option>
										<option>Not Available</option>
										<option>Brick</option>
										<option>Wood</option>
										<option>Cement</option>
									</select>
									<span className='inline-icon'>
										<FaArrowDown />
									</span>
								</div>
								</Form.Item>
							</Col>
							<Col xs={12} md={6}>
								<Form.Item
									name='details.floors'
									
								>
									<div className='input-item input-item-textarea ltn__custom-icon'>
										<Input
											type='number'
											name='details.floors'
											placeholder='floors (*number)'
										/>
										<span className='inline-icon'>
											<FaPencilAlt />
										</span>
									</div>
								</Form.Item>
							</Col>

						</Row>

						<h6 className="my-3">Amenities and Features</h6>
						<h6 className="my-3">Interior Details</h6>
						<Row>
							<Col xs={12} md={6} lg={4}>
								<Form.Item
									name='feature.EquippedKitchen'
									valuePropName='checked'
									initialValue={false}
								>
									<label className='checkbox-item'>
										Equipped Kitchen
										<input type='checkbox' name='feature[]' />
										<span className='checkmark'></span>
									</label>
								</Form.Item>
							</Col>
							<Col xs={12} md={6} lg={4}>
								<Form.Item
									name='feature.Gym'
									valuePropName='checked'
									initialValue={false}
								>
									<label className='checkbox-item'>
										Gym
										<input type='checkbox' name='feature[]' />
										<span className='checkmark'></span>
									</label>
								</Form.Item>
							</Col>
							<Col xs={12} md={6} lg={4}>
								<Form.Item
									name='feature.Laundry'
									valuePropName='checked'
									initialValue={false}
								>
									<label className='checkbox-item'>
										Laundry
										<input type='checkbox' name='feature[]' />
										<span className='checkmark'></span>
									</label>
								</Form.Item>
							</Col>
							<Col xs={12} md={6} lg={4}>
								<Form.Item
									name='feature.MediaRoom'
									valuePropName='checked'
									initialValue={false}
								>
									<label className='checkbox-item'>
										Media Room
										<input type='checkbox' name='feature[]' />
										<span className='checkmark'></span>
									</label>
								</Form.Item>
							</Col>
						</Row>

						<h6 className='mt-20'>Outdoor Details</h6>
						<Row>
							<Col xs={12} md={6} lg={4}>
								<Form.Item
									name='feature.Backyard'
									valuePropName='checked'
									initialValue={false}
								>
									<label className='checkbox-item'>
										Back yard
										<input type='checkbox' name='feature[]' />
										<span className='checkmark'></span>
									</label>
								</Form.Item>
							</Col>
							<Col xs={12} md={6} lg={4}>
								<Form.Item
									name='feature.BasketballCourt'
									valuePropName='checked'
									initialValue={false}
								>
									<label className='checkbox-item'>
										Basketball court
										<input type='checkbox' name='feature[]' />
										<span className='checkmark'></span>
									</label>
								</Form.Item>
							</Col>
							<Col xs={12} md={6} lg={4}>
								<Form.Item
									name='feature.FrontYard'
									valuePropName='checked'
									initialValue={false}
								>
									<label className='checkbox-item'>
										Front yard
										<input type='checkbox' name='feature[]' />
										<span className='checkmark'></span>
									</label>
								</Form.Item>
							</Col>
							<Col xs={12} md={6} lg={4}>
								<Form.Item
									name='feature.GarageAttached'
									valuePropName='checked'
									initialValue={false}
								>
									<label className='checkbox-item'>
										Garage Attached
										<input type='checkbox' name='feature[]' />
										<span className='checkmark'></span>
									</label>
								</Form.Item>
							</Col>
							<Col xs={12} md={6} lg={4}>
								<Form.Item
									name='feature.HotBath'
									valuePropName='checked'
									initialValue={false}
								>
									<label className='checkbox-item'>
										Hot Bath
										<input type='checkbox' name='feature[]' />
										<span className='checkmark'></span>
									</label>
								</Form.Item>
							</Col>
							<Col xs={12} md={6} lg={4}>
								<Form.Item
									name='feature.Pool'
									valuePropName='checked'
									initialValue={false}
								>
									<label className='checkbox-item'>
										Pool
										<input type='checkbox' name='feature[]' />
										<span className='checkmark'></span>
									</label>
								</Form.Item>
							</Col>
						</Row>

						<h6 className='mt-20'>Utilities</h6>
						<Row>
							<Col xs={12} md={6} lg={4}>
								<Form.Item
									name='feature.CentralAir'
									valuePropName='checked'
									initialValue={false}
								>
									<label className='checkbox-item'>
										Central Air
										<input type='checkbox' name='feature.CentralAir' />
										<span className='checkmark'></span>
									</label>
								</Form.Item>
							</Col>
							<Col xs={12} md={6} lg={4}>
								<Form.Item
									name='feature.Electricity'
									valuePropName='checked'
									initialValue={false}
								>
									<label className='checkbox-item'>
										Electricity
										<input type='checkbox' name='feature.Electricity' />
										<span className='checkmark'></span>
									</label>
								</Form.Item>
							</Col>
							<Col xs={12} md={6} lg={4}>
								<Form.Item
									name='feature.Heating'
									valuePropName='checked'
									initialValue={false}
								>
									<label className='checkbox-item'>
										Heating
										<input type='checkbox' name='feature[]' />
										<span className='checkmark'></span>
									</label>
								</Form.Item>
							</Col>
							<Col xs={12} md={6} lg={4}>
								<Form.Item
									name='feature.NaturalGas'
									valuePropName='checked'
									initialValue={false}
								>
									<label className='checkbox-item'>
										Natural Gas
										<input type='checkbox' name='feature[]' />
										<span className='checkmark'></span>
									</label>
								</Form.Item>
							</Col>
							<Col xs={12} md={6} lg={4}>
								<Form.Item
									name='feature.Ventilation'
									valuePropName='checked'
									initialValue={false}
								>
									<label className='checkbox-item'>
										Ventilation
										<input type='checkbox' name='feature[]' />
										<span className='checkmark'></span>
									</label>
								</Form.Item>
							</Col>
							<Col xs={12} md={6} lg={4}>
								<Form.Item
									name='feature.Water'
									valuePropName='checked'
									initialValue={false}
								>
									<label className='checkbox-item'>
										Water
										<input type='checkbox' name='feature[]' />
										<span className='checkmark'></span>
									</label>
								</Form.Item>
							</Col>
						</Row>

						<h6 className='mt-20'>Other Features</h6>
						<Row>
							<Col xs={12} md={6} lg={4}>
								<Form.Item
									name='feature.ChairAccessible'
									valuePropName='checked'
									initialValue={false}
								>
									<label className='checkbox-item'>
										Chair Accessible
										<input type='checkbox' name='feature[]' />
										<span className='checkmark'></span>
									</label>
								</Form.Item>
							</Col>
							<Col xs={12} md={6} lg={4}>
								<Form.Item
									name='feature.Elevator'
									valuePropName='checked'
									initialValue={false}
								>
									<label className='checkbox-item'>
										Elevator
										<input type='checkbox' name='feature[]' />
										<span className='checkmark'></span>
									</label>
								</Form.Item>
							</Col>
							<Col xs={12} md={6} lg={4}>
								<Form.Item
									name='Fireplace'
									valuePropName='checked'
									initialValue={false}
								>
									<label className='checkbox-item'>
										Fireplace
										<input type='checkbox' name='feature[]' />
										<span className='checkmark'></span>
									</label>
								</Form.Item>
							</Col>
							<Col xs={12} md={6} lg={4}>
								<Form.Item
									name='SmokeDetectors'
									valuePropName='checked'
									initialValue={false}
								>
									<label className='checkbox-item'>
										Smoke detectors
										<input type='checkbox' name='feature[]' />
										<span className='checkmark'></span>
									</label>
								</Form.Item>
							</Col>
							<Col xs={12} md={6} lg={4}>
								<Form.Item
									name='WasherDryer'
									valuePropName='checked'
									initialValue={false}
								>
									<label className='checkbox-item'>
										Washer and dryer
										<input type='checkbox' name='feature[]' />
										<span className='checkmark'></span>
									</label>
								</Form.Item>
							</Col>
							<Col xs={12} md={6} lg={4}>
								<Form.Item
									name='WiFi'
									valuePropName='checked'
									initialValue={false}
								>
									<label className='checkbox-item'>
										WiFi
										<input type='checkbox' name='feature[]' />
										<span className='checkmark'></span>
									</label>
								</Form.Item>
							</Col>
						</Row>
						<div className='btn-wrapper text-center--- mt-30'>
							<button
								className='btn theme-btn-1 btn-effect-1 text-uppercase'
								type='submit'
							>
								Submit Property
							</button>
						</div>
					</div>
				</Form>
			</Tab.Pane>
		</>
	);
}

export default MyAccount;