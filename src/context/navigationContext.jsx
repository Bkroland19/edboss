import { createContext, useState, useEffect} from "react";




const navigationContext = createContext();
const employeeData = [
  {
    id: 1,
    employeeTittle: 'Software Engineer',
    employeeName: 'Bukenya Roland',
    employeeProfilePic: 'https://res.cloudinary.com/dmhsf5hqd/image/upload/v1686837946/image3_mmlqmd.webp',
    aboutEmployee: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi culpa ad, suscipit, ipsum fuga dolore numquam corporis, ab maiores labore voluptas. Dolorem recusandae ex .',

  },
  {
    id: 1,
    employeeTittle: 'Marketing Manager',
    employeeName: 'Baluku Wilton',
    employeeProfilePic: 'https://res.cloudinary.com/dmhsf5hqd/image/upload/v1686837946/image5_zrmly0.webp',
    aboutEmployee: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi culpa ad, suscipit, ipsum fuga dolore numquam corporis, ab maiores labore voluptas. Dolorem recusandae ex .',

  },
  {
    id: 2,
    employeeTittle: 'Financial Analyst',
    employeeName: 'Asiimwe Fred',
    employeeProfilePic: 'https://res.cloudinary.com/dmhsf5hqd/image/upload/v1686837946/image4_bh1hxo.webp',
    aboutEmployee: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi culpa ad, suscipit, ipsum fuga dolore numquam corporis, ab maiores labore voluptas. Dolorem recusandae ex .',

  },
  {
    id: 3,
    employeeTittle: 'Graphic Designer',
    employeeName: 'Nalwanga Daphine',
    employeeProfilePic: 'https://res.cloudinary.com/dmhsf5hqd/image/upload/v1686837946/image6_n44pde.webp',
    aboutEmployee: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi culpa ad, suscipit, ipsum fuga dolore numquam corporis, ab maiores labore voluptas. Dolorem recusandae ex .',

  },
  {
    id: 4,
    employeeTittle: 'Human Resources Coordinator ',
    employeeName: 'Ouma Benard Orchieng',
    employeeProfilePic: 'https://res.cloudinary.com/dmhsf5hqd/image/upload/v1686837946/image7_heqwyq.webp',
    aboutEmployee: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi culpa ad, suscipit, ipsum fuga dolore numquam corporis, ab maiores labore voluptas. Dolorem recusandae ex .',

  },
  {
    id: 5,
    employeeTittle: 'Data Scientist',
    employeeName: 'Lina Mutony',
    employeeProfilePic: 'https://res.cloudinary.com/dmhsf5hqd/image/upload/v1686837945/image8_icnmjd.webp',
    aboutEmployee: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi culpa ad, suscipit, ipsum fuga dolore numquam corporis, ab maiores labore voluptas. Dolorem recusandae ex .',

  },
];

function NavigationProvider({children}) {
 
  const [currentPath, setCurrentPath] =useState(window.location.pathname);
    const [activePage, setActivePage] =useState('Home');
 
  useEffect(
    ()=>{
      const handler =()=>{
        setCurrentPath(window.location.pathname)
      };
      window.addEventListener('popstate', handler);
      return ()=>{
        window.removeEventListener('popstate', handler);
      };
    }, []
  );

  const navigate = (to)=>{
    window.history.pushState({}, '',to);
    setCurrentPath(to);
  };


  return (
    <navigationContext.Provider value={{navigate, currentPath, setCurrentPath, activePage, setActivePage, employeeData}}>
      {children}
    </navigationContext.Provider>
  );
}

export {NavigationProvider};

export default navigationContext
