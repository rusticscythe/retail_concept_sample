import React, { useState } from 'react';
import { 
  Building2, Users, ShoppingBag, PieChart, 
  TrendingUp, Settings, Target, Wallet, 
  Handshake, ChevronRight, Info, CheckCircle2,
  ShieldCheck, Zap, BarChart3, Box, Truck, Layers,
  ArrowRight, HeartHandshake
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('canvas');

  // Financial Calculations based on 120M Revenue
  const annualSales = 120000000;
  const grossMarginPct = 0.18;
  const grossProfit = annualSales * grossMarginPct;
  
  // Estimates for Expenses (Owner's Responsibility)
  const totalOpEx = annualSales * 0.10; // 10% including staff, utilities, etc.
  const netOperatingProfit = grossProfit - totalOpEx;

  // Brand Fees (Partnership Model)
  const royaltyFeePct = 0.015; // 1.5% of Revenue
  const royaltyFee = annualSales * royaltyFeePct;
  
  // Sensitivity Analysis Cases for Incentive Fee (Sample Cases: 3%, 5%, 8%)
  const incentiveRates = [0.03, 0.05, 0.08];
  const sensitivityCases = incentiveRates.map(rate => ({
    rate: (rate * 100) + "%",
    incentive: netOperatingProfit * rate,
    total: (netOperatingProfit * rate) + royaltyFee
  }));

  // Current Selection (Target Case for main display)
  const currentIncentiveRate = 0.05;
  const incentiveFee = netOperatingProfit * currentIncentiveRate;
  const totalBrandIncome = royaltyFee + incentiveFee;
  const ownerFinalProfit = netOperatingProfit - totalBrandIncome;

  const bmcData = [
    {
      title: "Key Partners (พันธมิตร)",
      icon: <Handshake className="text-blue-500" />,
      items: [
        { text: "Brand & Owner (Joint Strategic)", concern: "Both" },
        { text: "Product Suppliers", concern: "Owner" },
        { text: "Logistics Partners", concern: "Owner" },
        { text: "Payment Gateway Providers", concern: "Brand" }
      ],
      color: "bg-blue-50"
    },
    {
      title: "Key Activities (กิจกรรมหลัก)",
      icon: <Settings className="text-purple-500" />,
      items: [
        { text: "บริหารสต็อก & สั่งซื้อสินค้า", concern: "Owner" },
        { text: "บริหารพนักงาน & บริการลูกค้า", concern: "Owner" },
        { text: "วางกลยุทธ์ & Branding", concern: "Brand" },
        { text: "Sourcing House Brand", concern: "Brand" }
      ],
      color: "bg-purple-50"
    },
    {
      title: "Value Propositions (คุณค่า)",
      icon: <Target className="text-red-500" />,
      items: [
        { text: "Owner: ระบบหลังบ้านที่แข็งแรง", concern: "Both" },
        { text: "Brand: ขยายตลาดผ่าน Local Partner", concern: "Brand" },
        { text: "Customer: สินค้าดี บริการประทับใจ", concern: "Both" }
      ],
      color: "bg-red-50"
    },
    {
      title: "Customer Relationships",
      icon: <Users className="text-green-500" />,
      items: [
        { text: "ระบบสมาชิก CRM กลาง", concern: "Brand" },
        { text: "Local Community Marketing", concern: "Both (Owner lead)" },
        { text: "การดูแลลูกค้าหน้างาน", concern: "Owner" }
      ],
      color: "bg-green-50"
    },
    {
      title: "Customer Segments",
      icon: <ShoppingBag className="text-orange-500" />,
      items: [
        { text: "Local Shoppers ในพื้นที่", concern: "Both" },
        { text: "กลุ่มเป้าหมายเฉพาะของแบรนด์", concern: "Brand" }
      ],
      color: "bg-orange-50"
    },
    {
      title: "Key Resources (ทรัพยากร)",
      icon: <Building2 className="text-indigo-500" />,
      items: [
        { text: "สิทธิ์การใช้แบรนด์ & SOP", concern: "Brand" },
        { text: "เงินทุนหมุนเวียน (Stock)", concern: "Owner" },
        { text: "พื้นที่ & อุปกรณ์หน้าร้าน", concern: "Both" }
      ],
      color: "bg-indigo-50"
    },
    {
      title: "Channels (ช่องทาง)",
      icon: <TrendingUp className="text-teal-500" />,
      items: [
        { text: "หน้าร้านบริหารโดย Owner", concern: "Owner" },
        { text: "Online Platforms", concern: "Brand" }
      ],
      color: "bg-teal-50"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans text-slate-900">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8 text-center md:text-left flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 uppercase tracking-tight">Strategic Retail Partnership</h1>
          <p className="text-slate-500 mt-1 italic font-medium">โมเดลพาร์ทเนอร์: Owner บริหารหน้างาน | Brand สนับสนุนกลยุทธ์ (v5.0)</p>
        </div>
        <div className="flex flex-wrap gap-2 justify-center bg-white p-1.5 rounded-xl border shadow-sm">
          {['canvas', 'roles', 'finance'].map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)} 
              className={`px-4 py-2 rounded-lg font-semibold transition-all text-sm capitalize ${activeTab === tab ? 'bg-blue-600 text-white shadow-md' : 'bg-transparent text-slate-600 hover:bg-slate-50'}`}
            >
              {tab === 'finance' ? 'Revenue Model' : tab === 'roles' ? 'Roles & Matrix' : 'Business Canvas'}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {activeTab === 'canvas' && (
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {bmcData.map((section, idx) => (
              <div key={idx} className={`p-5 rounded-2xl border ${section.color} shadow-sm ${idx === 0 || idx === 2 || idx === 4 ? 'md:row-span-2' : ''}`}>
                <div className="flex items-center gap-2 mb-4 font-bold border-b pb-2 text-slate-700">
                  {section.icon} {section.title}
                </div>
                <ul className="space-y-4">
                  {section.items.map((item, i) => (
                    <li key={i} className="text-sm">
                      <div className="font-medium text-slate-800">{item.text}</div>
                      <div className={`text-[10px] font-bold uppercase mt-1 px-1.5 py-0.5 rounded inline-block ${item.concern === 'Brand' ? 'bg-purple-100 text-purple-600' : item.concern === 'Owner' ? 'bg-blue-100 text-blue-600' : 'bg-slate-200 text-slate-600'}`}>
                        {item.concern} focus
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'roles' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Owner Column */}
              <div className="bg-white rounded-3xl border shadow-sm overflow-hidden">
                <div className="bg-blue-600 p-5 text-white flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold">The Owner (Operating Partner)</h3>
                    <p className="text-blue-100 text-xs text-opacity-80">ผู้บริหารจัดการหน้างานและสต็อก</p>
                  </div>
                  <Building2 size={32} className="text-blue-200 opacity-50" />
                </div>
                <div className="p-6 space-y-4">
                  <ul className="space-y-3">
                    <li className="flex gap-3 text-slate-700 text-sm">
                      <CheckCircle2 size={16} className="text-blue-500 flex-shrink-0 mt-1" />
                      <span><strong>Management:</strong> จ้างงานและบริหารพนักงานสาขาโดยตรง</span>
                    </li>
                    <li className="flex gap-3 text-slate-700 text-sm">
                      <CheckCircle2 size={16} className="text-blue-500 flex-shrink-0 mt-1" />
                      <span><strong>Inventory:</strong> รับผิดชอบการสั่งซื้อ, ตรวจรับ และดูแลสต็อกสินค้า</span>
                    </li>
                    <li className="flex gap-3 text-slate-700 text-sm">
                      <CheckCircle2 size={16} className="text-blue-500 flex-shrink-0 mt-1" />
                      <span><strong>Local Marketing (Lead):</strong> จัดกิจกรรมการตลาดในพื้นที่รอบร้าน</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Brand Column */}
              <div className="bg-white rounded-3xl border shadow-sm overflow-hidden">
                <div className="bg-purple-600 p-5 text-white flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold">The Brand (Strategic Partner)</h3>
                    <p className="text-purple-100 text-xs text-opacity-80">ผู้สนับสนุนระบบและสินค้าพิเศษ</p>
                  </div>
                  <Zap size={32} className="text-purple-200 opacity-50" />
                </div>
                <div className="p-6 space-y-4">
                  <ul className="space-y-3">
                    <li className="flex gap-3 text-slate-700 text-sm">
                      <CheckCircle2 size={16} className="text-purple-500 flex-shrink-0 mt-1" />
                      <span><strong>Product Sourcing:</strong> คัดหาสินค้า House Brand / Private Brand เสริม Margin</span>
                    </li>
                    <li className="flex gap-3 text-slate-700 text-sm">
                      <CheckCircle2 size={16} className="text-purple-500 flex-shrink-0 mt-1" />
                      <span><strong>Infrastructure:</strong> ให้เช่าใช้ระบบ POS, CRM และ Technology กลาง</span>
                    </li>
                    <li className="flex gap-3 text-slate-700 text-sm">
                      <CheckCircle2 size={16} className="text-purple-500 flex-shrink-0 mt-1" />
                      <span><strong>Strategy:</strong> วิเคราะห์ BI แนะนำการเพิ่มประสิทธิภาพรายสาขา</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Joint Responsibility Section */}
            <div className="bg-white rounded-3xl border-2 border-dashed border-slate-300 shadow-sm overflow-hidden">
              <div className="bg-slate-100 p-4 border-b flex items-center gap-3">
                <HeartHandshake className="text-slate-700" size={24} />
                <h3 className="text-lg font-bold text-slate-800 uppercase tracking-tight">Joint Responsibilities (รับผิดชอบร่วมกัน)</h3>
              </div>
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: <TrendingUp className="text-green-600" />, title: "Sales Growth", desc: "ร่วมกันผลักดันยอดขายให้เติบโตตามเป้าหมาย (KPI)" },
                  { icon: <Target className="text-red-600" />, title: "Brand Value", desc: "สร้างคุณค่าและรักษาภาพลักษณ์ของแบรนด์ร่วมกัน" },
                  { icon: <Users className="text-blue-600" />, title: "Customer Experience", desc: "ดูแลมาตรฐานบริการและความพึงพอใจลูกค้า" },
                  { icon: <Layers className="text-purple-600" />, title: "Operational Standards", desc: "ควบคุมระบบ Audit & Feedback ให้ได้คุณภาพ" },
                  { icon: <Truck className="text-teal-600" />, title: "Asset Maintenance", desc: "ร่วมกันดูแลพื้นที่และอุปกรณ์หน้าร้านให้ดีเยี่ยม" }
                ].map((joint, idx) => (
                  <div key={idx} className="flex gap-3">
                    <div className="mt-1 flex-shrink-0">{joint.icon}</div>
                    <div>
                      <p className="font-bold text-sm text-slate-800">{joint.title}</p>
                      <p className="text-xs text-slate-600 leading-relaxed">{joint.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'finance' && (
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-amber-100 text-amber-700 px-4 py-1 rounded-bl-xl font-bold text-xs uppercase">
                Scenario สมมติ (Hypothetical)
              </div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-slate-800">
                <BarChart3 className="text-blue-600" /> Revenue & Profit Analysis (Annual Revenue: 120M)
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-slate-600">
                    <span>ยอดขายรวม (Total Revenue)</span>
                    <span className="font-bold">{annualSales.toLocaleString()} ฿</span>
                  </div>
                  <div className="flex justify-between items-center text-red-500">
                    <span>ต้นทุนสินค้า (COGS - 82%)</span>
                    <span className="font-semibold">- {(annualSales * 0.82).toLocaleString()} ฿</span>
                  </div>
                  <div className="flex justify-between items-center py-2 bg-slate-50 px-4 rounded-lg font-bold">
                    <span>Gross Profit (18% GP)</span>
                    <span>{grossProfit.toLocaleString()} ฿</span>
                  </div>
                  <div className="flex justify-between items-center text-red-500 border-b pb-2">
                    <span>OPEX (บริหารโดย Owner)</span>
                    <span className="font-semibold">- {totalOpEx.toLocaleString()} ฿</span>
                  </div>
                  <div className="flex justify-between items-center py-4 bg-blue-50 px-6 rounded-2xl font-black text-blue-900 border-2 border-blue-200 shadow-inner">
                    <span>GOP (กำไรก่อนหักค่าธรรมเนียม)</span>
                    <span className="text-2xl">{netOperatingProfit.toLocaleString()} ฿</span>
                  </div>
                </div>

                <div className="p-6 bg-slate-900 text-white rounded-2xl h-fit">
                  <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Zap size={14} /> Brand Income: Sample Cases
                  </p>
                  <table className="w-full text-sm">
                    <thead className="text-slate-400 border-b border-slate-700">
                      <tr>
                        <th className="text-left pb-2 font-normal">Performance Incentive Case</th>
                        <th className="text-right pb-2 font-normal">Total Brand Income</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">
                      {sensitivityCases.map((item, idx) => (
                        <tr key={idx} className={item.rate === "5%" ? "text-blue-400 font-bold" : ""}>
                          <td className="py-3 flex items-center gap-2">
                            {item.rate === "5%" && <ArrowRight size={14}/>} 
                            Incentive {item.rate} of GOP
                          </td>
                          <td className="py-3 text-right">{Math.round(item.total).toLocaleString()} ฿</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p className="text-[10px] text-slate-500 mt-4 leading-relaxed italic">
                    * คำนวณจาก: (Royalty 1.5% fixed) + (Incentive % จากกำไรสุทธิสาขา)
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 rounded-3xl shadow-xl flex justify-between items-center">
                <div>
                  <h4 className="text-blue-100 font-bold mb-1 uppercase text-[10px] tracking-wider">Owner's Net Profit (Target)</h4>
                  <p className="text-4xl font-black">{Math.round(ownerFinalProfit).toLocaleString()} ฿</p>
                  <p className="text-xs text-blue-200 mt-2 italic text-opacity-80">หลังแบ่งพาร์ทเนอร์เคส 5% แล้ว</p>
                </div>
                <Building2 size={48} className="text-white opacity-20" />
              </div>
              <div className="bg-gradient-to-br from-purple-600 to-purple-700 text-white p-8 rounded-3xl shadow-xl flex justify-between items-center">
                <div>
                  <h4 className="text-purple-100 font-bold mb-1 uppercase text-[10px] tracking-wider">Brand's Total Income (Target)</h4>
                  <p className="text-4xl font-black text-purple-100">{Math.round(totalBrandIncome).toLocaleString()} ฿</p>
                  <p className="text-xs text-purple-200 mt-2 italic text-opacity-80">รายได้รวมจากการซัพพอร์ตกลยุทธ์</p>
                </div>
                <Handshake size={48} className="text-white opacity-20" />
              </div>
            </div>
          </div>
        )}
      </div>

      <footer className="max-w-7xl mx-auto mt-12 pb-8 text-center text-slate-400 text-[10px] font-bold uppercase tracking-widest border-t pt-8">
        Retail Strategic Partnership Dashboard • Built for Professional Strategy Presentation • v5.0
      </footer>
    </div>
  );
};

export default App;
