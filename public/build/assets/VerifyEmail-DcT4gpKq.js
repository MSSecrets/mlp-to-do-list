import{T as f,h as m,o as a,c as g,w as s,a as o,u as e,Z as p,f as y,g as _,b as i,d as r,n as h,j as k,e as x}from"./app-D7PX_1Lp.js";import{_ as v}from"./GuestLayout-D_b98Wgv.js";import{_ as b}from"./PrimaryButton-pdQktmD3.js";import"./ApplicationLogo-yCl63HeI.js";const w=i("div",{class:"mb-4 text-sm text-gray-600 dark:text-gray-400"}," Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. ",-1),V={key:0,class:"mb-4 font-medium text-sm text-green-600 dark:text-green-400"},B={class:"mt-4 flex items-center justify-between"},T={__name:"VerifyEmail",props:{status:String},setup(n){const c=n,t=f({}),d=()=>{t.post(route("verification.send"))},l=m(()=>c.status==="verification-link-sent");return(u,E)=>(a(),g(v,null,{default:s(()=>[o(e(p),{title:"Email Verification"}),w,l.value?(a(),y("div",V," A new verification link has been sent to the email address you provided during registration. ")):_("",!0),i("form",{onSubmit:x(d,["prevent"])},[i("div",B,[o(b,{class:h({"opacity-25":e(t).processing}),disabled:e(t).processing},{default:s(()=>[r(" Resend Verification Email ")]),_:1},8,["class","disabled"]),o(e(k),{href:u.route("logout"),method:"post",as:"button",class:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"},{default:s(()=>[r("Log Out")]),_:1},8,["href"])])],32)]),_:1}))}};export{T as default};
