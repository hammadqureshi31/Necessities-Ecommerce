import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

function FilterDropDown({ handleFilter }) {
    return (
      <Dropdown as={ButtonGroup}>
        <Button  className='bg-[#84019F] font-marg md:hidden'>
          Filter
        </Button>
  
        <Dropdown.Toggle split id="dropdown-split-basic" className='bg-[#84019F] md:hidden' />
  
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => handleFilter("men's clothing")} className='hover:bg-gray-200 text-center font-marg'>Men</Dropdown.Item>
          <hr className='m-1 opacity-15'/>
          <Dropdown.Item onClick={() => handleFilter("women's clothing")} className='hover:bg-gray-200 text-center font-marg'>Women</Dropdown.Item>
          <hr className='m-1 opacity-15'/>
          <Dropdown.Item onClick={() => handleFilter("jewelery")} className='hover:bg-gray-200 text-center font-marg'>Jewelery</Dropdown.Item>
          <hr className='m-1 opacity-15'/>
          <Dropdown.Item onClick={() => handleFilter("electronics")} className='hover:bg-gray-200 text-center font-marg'>Electronics</Dropdown.Item>
          <hr className='m-1 opacity-15'/>
          <Dropdown.Item onClick={() => handleFilter("shoes")} className='hover:bg-gray-200 text-center font-marg'>Shoes</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
  

export default FilterDropDown;