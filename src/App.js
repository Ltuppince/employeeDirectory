import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/TItle/Title";
import EmployeeCard from "./components/EmployeeCard/index";
import employee from "./employee.json";
// import Navigation from "./components/Navbar/index"
import SearchForm from "./components/SearchForm/index"


function App() {
  return (
   <Wrapper>
     
     <SearchForm></SearchForm>
     <Title>Employee Directory</Title>
     <EmployeeCard
        img={employee[0].img}
        name={employee[0].name}
        position={employee[0].position}
        office={employee[0].office}
        mobile={employee[0].mobile}
        email={employee[0].email}
      />
      <EmployeeCard
        img={employee[1].img}
        name={employee[1].name}
        position={employee[1].position}
        office={employee[1].office}
        mobile={employee[1].mobile}
        email={employee[1].email}
      />
      <EmployeeCard
        img={employee[2].img}
        name={employee[2].name}
        position={employee[2].position}
        office={employee[2].office}
        mobile={employee[2].mobile}
        email={employee[2].email}
      />
      <EmployeeCard
        img={employee[3].img}
        name={employee[3].name}
        position={employee[3].position}
        office={employee[3].office}
        mobile={employee[3].mobile}
        email={employee[3].email}
      />
      <EmployeeCard
        img={employee[4].img}
        name={employee[4].name}
        position={employee[4].position}
        office={employee[4].office}
        mobile={employee[4].mobile}
        email={employee[4].email}
      />
      <EmployeeCard
        img={employee[5].img}
        name={employee[5].name}
        position={employee[5].position}
        office={employee[5].office}
        mobile={employee[5].mobile}
        email={employee[5].email}
      />
      <EmployeeCard
        img={employee[6].img}
        name={employee[6].name}
        position={employee[6].position}
        office={employee[6].office}
        mobile={employee[6].mobile}
        email={employee[6].email}
      />
      <EmployeeCard
        img={employee[7].img}
        name={employee[7].name}
        position={employee[7].position}
        office={employee[7].office}
        mobile={employee[7].mobile}
        email={employee[7].email}
      />
      <EmployeeCard
        img={employee[8].img}
        name={employee[8].name}
        position={employee[8].position}
        office={employee[8].office}
        mobile={employee[8].mobile}
        email={employee[8].email}
      />
      <EmployeeCard
        img={employee[9].img}
        name={employee[9].name}
        position={employee[9].position}
        office={employee[9].office}
        mobile={employee[9].mobile}
        email={employee[9].email}
      />
      <EmployeeCard
        img={employee[10].img}
        name={employee[10].name}
        position={employee[10].position}
        office={employee[10].office}
        mobile={employee[10].mobile}
        email={employee[10].email}
      />
      <EmployeeCard
        img={employee[11].img}
        name={employee[11].name}
        position={employee[11].position}
        office={employee[11].office}
        mobile={employee[11].mobile}
        email={employee[11].email}
      />
      <EmployeeCard
        img={employee[12].img}
        name={employee[12].name}
        position={employee[12].position}
        office={employee[12].office}
        mobile={employee[12].mobile}
        email={employee[12].email}
      />
      <EmployeeCard
        img={employee[13].img}
        name={employee[13].name}
        position={employee[13].position}
        office={employee[13].office}
        mobile={employee[13].mobile}
        email={employee[13].email}
      />
      <EmployeeCard
        img={employee[14].img}
        name={employee[14].name}
        position={employee[14].position}
        office={employee[14].office}
        mobile={employee[14].mobile}
        email={employee[14].email}
      />
      <EmployeeCard
        img={employee[15].img}
        name={employee[15].name}
        position={employee[15].position}
        office={employee[15].office}
        mobile={employee[15].mobile}
        email={employee[15].email}
      />
      
      
   </Wrapper>
  );
}



export default App;
