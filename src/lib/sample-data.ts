// Sample data only. Nothing here is real; it is replaced once the database is connected.

export type LeadStatus = "New" | "Contacted" | "Consultation booked" | "Won" | "Lost";
export type LeadSource = "WhatsApp" | "Instagram" | "Google" | "Walk-in" | "Referral";

export type Lead = {
  id: string;
  name: string;
  phone: string;
  interest: string;
  source: LeadSource;
  status: LeadStatus;
  owner: string;
  lastContact: string;
};

export type Customer = {
  id: string;
  name: string;
  phone: string;
  city: string;
  lastVisit: string;
  visits: number;
  totalSpent: number;
  plan: string;
};

export type AppointmentStatus = "Confirmed" | "Waiting" | "In progress" | "Completed" | "Cancelled";

export type Appointment = {
  id: string;
  time: string;
  durationMin: number;
  client: string;
  service: string;
  practitioner: string;
  room: string;
  status: AppointmentStatus;
};

export type FollowUpKind = "Call" | "WhatsApp" | "Review check" | "Payment reminder";
export type FollowUpState = "Overdue" | "Due today" | "Upcoming";

export type FollowUp = {
  id: string;
  client: string;
  reason: string;
  kind: FollowUpKind;
  due: string;
  state: FollowUpState;
  owner: string;
};

export const clinic = {
  name: "Sunrise Wellness Clinic",
  city: "Chennai",
  today: "Tuesday, 14 October",
};

export const leads: Lead[] = [
  { id: "L-1001", name: "Meera Krishnan", phone: "+91 90000 00101", interest: "Skin consultation", source: "WhatsApp", status: "New", owner: "Divya", lastContact: "Today, 9:40 am" },
  { id: "L-1002", name: "Arjun Nair", phone: "+91 90000 00102", interest: "Physiotherapy, 6 sessions", source: "Google", status: "Contacted", owner: "Karthik", lastContact: "Yesterday" },
  { id: "L-1003", name: "Sneha Iyer", phone: "+91 90000 00103", interest: "Hair restoration", source: "Instagram", status: "Consultation booked", owner: "Divya", lastContact: "Today, 8:15 am" },
  { id: "L-1004", name: "Rohit Menon", phone: "+91 90000 00104", interest: "Ayurvedic detox", source: "Referral", status: "Won", owner: "Karthik", lastContact: "12 Oct" },
  { id: "L-1005", name: "Farah Sheikh", phone: "+91 90000 00105", interest: "Laser hair removal", source: "WhatsApp", status: "New", owner: "Divya", lastContact: "Today, 10:05 am" },
  { id: "L-1006", name: "Vikram Rao", phone: "+91 90000 00106", interest: "Dental whitening", source: "Walk-in", status: "Contacted", owner: "Priya", lastContact: "13 Oct" },
  { id: "L-1007", name: "Lakshmi Narayanan", phone: "+91 90000 00107", interest: "Yoga therapy", source: "Referral", status: "Consultation booked", owner: "Priya", lastContact: "13 Oct" },
  { id: "L-1008", name: "Imran Pasha", phone: "+91 90000 00108", interest: "Weight management", source: "Instagram", status: "Lost", owner: "Karthik", lastContact: "9 Oct" },
  { id: "L-1009", name: "Kavya Reddy", phone: "+91 90000 00109", interest: "Facial and peel package", source: "Google", status: "Won", owner: "Divya", lastContact: "11 Oct" },
  { id: "L-1010", name: "Tarun Joshi", phone: "+91 90000 00110", interest: "Back pain assessment", source: "WhatsApp", status: "Contacted", owner: "Priya", lastContact: "Yesterday" },
];

export const customers: Customer[] = [
  { id: "C-2001", name: "Anjali Verma", phone: "+91 90000 00201", city: "Chennai", lastVisit: "10 Oct", visits: 14, totalSpent: 48200, plan: "Glow membership" },
  { id: "C-2002", name: "Suresh Babu", phone: "+91 90000 00202", city: "Chennai", lastVisit: "8 Oct", visits: 9, totalSpent: 27500, plan: "Physio pack, 10 sessions" },
  { id: "C-2003", name: "Deepa Raman", phone: "+91 90000 00203", city: "Tambaram", lastVisit: "2 Oct", visits: 6, totalSpent: 18900, plan: "Ayurveda monthly" },
  { id: "C-2004", name: "Naveen Kumar", phone: "+91 90000 00204", city: "Chennai", lastVisit: "29 Sep", visits: 3, totalSpent: 7800, plan: "Pay per visit" },
  { id: "C-2005", name: "Pooja Bhatt", phone: "+91 90000 00205", city: "Anna Nagar", lastVisit: "13 Oct", visits: 21, totalSpent: 83400, plan: "Glow membership" },
  { id: "C-2006", name: "Harish Gopal", phone: "+91 90000 00206", city: "Velachery", lastVisit: "21 Sep", visits: 2, totalSpent: 4400, plan: "Pay per visit" },
  { id: "C-2007", name: "Revathi S", phone: "+91 90000 00207", city: "Chennai", lastVisit: "11 Oct", visits: 11, totalSpent: 36100, plan: "Yoga therapy, quarterly" },
  { id: "C-2008", name: "Mohammed Rafi", phone: "+91 90000 00208", city: "Adyar", lastVisit: "6 Oct", visits: 5, totalSpent: 15600, plan: "Dental care plan" },
];

export const appointments: Appointment[] = [
  { id: "A-3001", time: "9:00 am", durationMin: 30, client: "Pooja Bhatt", service: "Hydrafacial", practitioner: "Dr. Ananya Rao", room: "Room 2", status: "Completed" },
  { id: "A-3002", time: "9:45 am", durationMin: 45, client: "Suresh Babu", service: "Physiotherapy, session 7", practitioner: "Karthik M.", room: "Physio bay", status: "Completed" },
  { id: "A-3003", time: "10:30 am", durationMin: 30, client: "Meera Krishnan", service: "Skin consultation", practitioner: "Dr. Ananya Rao", room: "Room 1", status: "In progress" },
  { id: "A-3004", time: "11:15 am", durationMin: 60, client: "Revathi S", service: "Yoga therapy", practitioner: "Lakshmi P.", room: "Studio", status: "Waiting" },
  { id: "A-3005", time: "12:30 pm", durationMin: 30, client: "Sneha Iyer", service: "Hair restoration consult", practitioner: "Dr. Imran Khan", room: "Room 3", status: "Confirmed" },
  { id: "A-3006", time: "2:00 pm", durationMin: 45, client: "Deepa Raman", service: "Abhyanga massage", practitioner: "Vaidya Mohan", room: "Ayush room", status: "Confirmed" },
  { id: "A-3007", time: "3:30 pm", durationMin: 30, client: "Naveen Kumar", service: "Dental check-up", practitioner: "Dr. Imran Khan", room: "Room 3", status: "Confirmed" },
  { id: "A-3008", time: "4:30 pm", durationMin: 30, client: "Harish Gopal", service: "Skin consultation", practitioner: "Dr. Ananya Rao", room: "Room 1", status: "Cancelled" },
];

export const upcomingAppointments: (Appointment & { day: string })[] = [
  { id: "A-3101", day: "Wed, 15 Oct", time: "10:00 am", durationMin: 30, client: "Anjali Verma", service: "Glow membership facial", practitioner: "Dr. Ananya Rao", room: "Room 2", status: "Confirmed" },
  { id: "A-3102", day: "Wed, 15 Oct", time: "11:30 am", durationMin: 45, client: "Mohammed Rafi", service: "Teeth cleaning", practitioner: "Dr. Imran Khan", room: "Room 3", status: "Confirmed" },
  { id: "A-3103", day: "Thu, 16 Oct", time: "9:30 am", durationMin: 60, client: "Lakshmi Narayanan", service: "Yoga therapy consult", practitioner: "Lakshmi P.", room: "Studio", status: "Confirmed" },
  { id: "A-3104", day: "Thu, 16 Oct", time: "12:00 pm", durationMin: 30, client: "Farah Sheikh", service: "Laser patch test", practitioner: "Dr. Ananya Rao", room: "Room 1", status: "Confirmed" },
  { id: "A-3105", day: "Fri, 17 Oct", time: "10:45 am", durationMin: 45, client: "Vikram Rao", service: "Dental whitening", practitioner: "Dr. Imran Khan", room: "Room 3", status: "Confirmed" },
];

export const followUps: FollowUp[] = [
  { id: "F-4001", client: "Harish Gopal", reason: "Cancelled today's consultation; offer a new slot", kind: "WhatsApp", due: "Today, 5:00 pm", state: "Due today", owner: "Divya" },
  { id: "F-4002", client: "Imran Pasha", reason: "Asked for a lower package price last week", kind: "Call", due: "12 Oct", state: "Overdue", owner: "Karthik" },
  { id: "F-4003", client: "Naveen Kumar", reason: "Share aftercare notes for dental check-up", kind: "WhatsApp", due: "Today, 4:00 pm", state: "Due today", owner: "Priya" },
  { id: "F-4004", client: "Deepa Raman", reason: "Pending balance of ₹1,800", kind: "Payment reminder", due: "13 Oct", state: "Overdue", owner: "Divya" },
  { id: "F-4005", client: "Anjali Verma", reason: "Ask for a Google review after the facial", kind: "Review check", due: "15 Oct", state: "Upcoming", owner: "Priya" },
  { id: "F-4006", client: "Tarun Joshi", reason: "Confirm back pain assessment slot", kind: "Call", due: "Today, 6:00 pm", state: "Due today", owner: "Priya" },
  { id: "F-4007", client: "Suresh Babu", reason: "Check progress after physio session 7", kind: "WhatsApp", due: "16 Oct", state: "Upcoming", owner: "Karthik" },
  { id: "F-4008", client: "Farah Sheikh", reason: "Send laser pre-treatment instructions", kind: "WhatsApp", due: "16 Oct", state: "Upcoming", owner: "Divya" },
];

export const weeklyLeads = [
  { day: "Wed", count: 4 },
  { day: "Thu", count: 7 },
  { day: "Fri", count: 5 },
  { day: "Sat", count: 9 },
  { day: "Sun", count: 3 },
  { day: "Mon", count: 8 },
  { day: "Tue", count: 6 },
];

export const team = [
  { name: "Dr. Ananya Rao", role: "Dermatologist", access: "Admin" },
  { name: "Dr. Imran Khan", role: "Dentist", access: "Staff" },
  { name: "Divya", role: "Front desk", access: "Staff" },
  { name: "Karthik M.", role: "Physiotherapist", access: "Staff" },
];

export function formatINR(amount: number): string {
  return "₹" + amount.toLocaleString("en-IN");
}
