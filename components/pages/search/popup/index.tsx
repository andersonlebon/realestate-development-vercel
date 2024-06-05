'use client';

import Image from 'next/image';
import './popup.scss';
import ApartmentPic from '@/public/images/apartment.jpg';

const DataProducts = [
  {
    id: 1,
    name: 'Luxury apartment',
    profilePic: ApartmentPic,
    detail:
      'This property is mostly wooded and sits high on a hilltop overlooking the Mohawk River Val...',
    price: '$543',
    status: 'sales',
    location: 'California',
  },
  {
    id: 2,
    name: 'Luxury home',
    profilePic: ApartmentPic,
    detail:
      'This property is mostly wooded and sits high on a hilltop overlooking the Mohawk River Val...',
    price: '$543',
    status: 'sales',
    location: 'Manhattan',
  },
  {
    id: 3,
    name: 'Luxury apartment',
    profilePic: ApartmentPic,
    detail:
      'This property is mostly wooded and sits high on a hilltop overlooking the Mohawk River Val...',
    price: '$543',
    status: 'sales',
    location: 'Manhattan',
  },
  {
    id: 4,
    name: 'Luxury apartment',
    profilePic: ApartmentPic,
    detail:
      'This property is mostly wooded and sits high on a hilltop overlooking the Mohawk River Val...',
    price: '$543',
    status: 'sales',
    location: 'Queens',
  },
  {
    id: 5,
    name: 'Luxury apartment',
    profilePic: ApartmentPic,
    detail:
      'This property is mostly wooded and sits high on a hilltop overlooking the Mohawk River Val...',
    price: '$543',
    status: 'sales',
    location: 'Queens',
  },
  {
    id: 6,
    name: 'Luxury apartment',
    profilePic: ApartmentPic,
    detail:
      'This property is mostly wooded and sits high on a hilltop overlooking the Mohawk River Val...',
    price: '$543',
    status: 'sales',
    location: 'Manhattan',
  },
  {
    id: 7,
    name: 'Luxury Home',
    profilePic: ApartmentPic,
    detail:
      'This property is mostly wooded and sits high on a hilltop overlooking the Mohawk River Val...',
    price: '$543',
    status: 'sales',
    location: 'Manhattan',
  },
];

const Popup = () => (
    <section className="popupResult bg-white">
      <div className="results-header flex justify-between p-3">
        <p>We found {DataProducts.length} results.</p>
        <button>View results</button>
      </div>
      <ul className="result-wrapper">
        {DataProducts.map((item) => (
          <li key={item.id} className="result-item ">
            <div className="flex">
              <img
                src={item.profilePic}
                alt="Picture of the apartment"
                width={65}
                className="result-img"
              />

              <div className="text-details">
                <h4>
                  {item.name} in {item.location}
                </h4>
                <span>$ {item.price} / month</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );

export default Popup;
