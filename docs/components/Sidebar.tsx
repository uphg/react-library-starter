import SidebarItem from './SidebarItem'

const Sidebar = () => {
  return (
    <div className="w-[--sidebar-width] fixed top-15 left-0 bottom-0" border-r="1px solid light-700">
      <h2></h2>
      <div className="flex flex-col">
        <SidebarItem to="">Button 按钮</SidebarItem>
        <SidebarItem to="">Input 输入框</SidebarItem>
        <SidebarItem to="">Switch 开关</SidebarItem>
        <SidebarItem to="">Radio 单选</SidebarItem>
        <SidebarItem to="">Checkbox 多选</SidebarItem>
      </div>
    </div>
  )
}

export default Sidebar
