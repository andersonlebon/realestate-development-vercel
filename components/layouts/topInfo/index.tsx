import { Flex } from 'antd'
import style from './topInfo.module.scss'
import { CiLocationOn } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";




const TopInfo = () => {

  return (
    <Flex className={style.top_info} justify='space-between' align='center'>
      <Flex className="location">
      
        <Flex align='center' gap={3}>
        <CiLocationOn />Seattle, WA hils</Flex>
      </Flex>

      <Flex className="contact" gap={20}>
        <Flex align='center' gap={3}>
          <FiPhoneCall /> 1-800-555-5555</Flex>
        <Flex align='center' gap={3}>
          <MdOutlineEmail /> calebabderson@gmai.com </Flex>
      </Flex>
    </Flex>
  )
}


export default TopInfo