import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Nav from "./pages/nav/Nav"
import Home from "./pages/Home/Home"
import AllFood from "./pages/AllFood/AllFood"
import Tables from "./pages/Tables/Tables"
import SildeBarComponent from "./Components/SildeBarComponent/SildeBarComponent"
import { useState, type FC } from "react"
import Settings from "./pages/Manage/Settings"
import type { ItemsProps } from "./types"
import { NumTable } from "./Data/tableType"

const App: FC = () => {   // ✅ แก้ตรงนี้
  const [tableTotal, setTableTotal] = useState(NumTable.length)
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItem, setCartItem] = useState<ItemsProps[]>([]);

  const handleAddCart = (menu: any, qty: number) => {
    setCartItem(prev => {
      const exists = prev.find(item => item.id === menu.id)
      if (exists) {
        return prev.map(item =>
          item.id === menu.id ? { ...item, qty: (item.qty ?? 1) + qty } : item
        )
      }
      return [...prev, { ...menu, qty, type: menu.type??'ทั่วไป' }]
    })
  }

  return (
    <Router>
      <SildeBarComponent
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItem={cartItem}
        setCartItem={setCartItem}
      />
      <Nav openCart={() => setIsCartOpen(true)} />

      <Routes>
        <Route path="/" element={<Home handleAddCart={handleAddCart} />} />
        <Route path="/settings" element={
          <Settings tableTotal={tableTotal} setTableTotal={setTableTotal} />
        } />
        <Route path="/menu" element={<AllFood handleAddCart={handleAddCart} />} />
        <Route path="/tables" element={<Tables tableTotal={tableTotal} />} />
      </Routes>
    </Router>
  )
}

export default App
