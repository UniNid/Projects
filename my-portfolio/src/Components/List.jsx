const List=({list})=><ul >
    {list.map((item)=><li className='text-gray-600 list-disc ms-2 ps-2'>{item}</li>)}
    </ul>
export default List