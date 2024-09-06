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
          <Dropdown.Item onClick={() => handleFilter("fragrances")} className='hover:bg-gray-200 text-center font-marg'>Men</Dropdown.Item>
          <hr className='m-1 opacity-15'/>
          <Dropdown.Item onClick={() => handleFilter("beauty")} className='hover:bg-gray-200 text-center font-marg'>Women</Dropdown.Item>
          <hr className='m-1 opacity-15'/>
          <Dropdown.Item onClick={() => handleFilter("furniture")} className='hover:bg-gray-200 text-center font-marg'>Furniture</Dropdown.Item>
          <hr className='m-1 opacity-15'/>
          <Dropdown.Item onClick={() => handleFilter("")} className='hover:bg-gray-200 text-center font-marg'>Electronics</Dropdown.Item>
          <hr className='m-1 opacity-15'/>
          <Dropdown.Item onClick={() => handleFilter("groceries")} className='hover:bg-gray-200 text-center font-marg'>Groceries</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
  

export default FilterDropDown;