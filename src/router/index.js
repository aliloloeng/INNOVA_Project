import { createRouter, createWebHistory } from 'vue-router'


import HomeView from '@/view/HomeView.vue'
import MachinesPage from '@/view/MachinesPage.vue'
import shopPage from '@/view/shopPage.vue'
import ProfilePage from '@/view/ProfilePage.vue'
import ReportPage from '@/view/ReportPage.vue'
import MyOrderPage from '@/view/MyOrderPage.vue'

const routes = [
{ path: '/', name: 'Home', component: HomeView },
{
  path: '/report',
  name: 'Report',
  redirect: '/report/inspection-report',
  component: ReportPage,
  children:[
    { path:'inspection-report', name:'InspectionReport', component:() => import('@/view/ReportPage/InspectionReportComponent.vue') },
    { path:'services-report', name:'ServicesReport', component:() => import('@/view/ReportPage/ServicesReportComponent.vue') }
  ]
 },
{ path: '/machines', name: 'Machines', component: MachinesPage },
{ path: '/shop', name: 'shop', component: shopPage },
{path: '/my-order',name: 'MyOrder',component: MyOrderPage },
{
  path: '/profile',
  name: 'Profile',
  component: ProfilePage,
  redirect: '/profile/myTicket',
  children:[
    { path:'myTicket', name:'myTicket', component:() => import('@/view/profile/MyTicketPage.vue') },
    { path:'massageAdmin', name:'massageAdmin', component:() => import('@/view/profile/massageAdminPage.vue') },
    { path:'myOrderPage', name:'MyOrderPage', component:() => import('@/view/profile/MyOrderPage.vue') },
    { path:'myReportPage', name:'MyReportPage', component:() => import('@/view/profile/MyReportPage.vue') }
  ]
},
]


const router = createRouter({
  history: createWebHistory('/INNOVA_Project/'),
  routes
})

export default router
