const Navbar = [
	{
		name: 'Contact',
		link: '#'
	},
	{
		name: 'About',
		link: '#'
	},
	{
		name: 'Login',
		link: 'login'
	}
];

const mainBloodGroups = [
	{
		type: 'A',
		detail: 'has a antigens on the red blood cells with anti-b antibodies in the plasma'
	},
	{
		type: 'B',
		detail: 'has B antigens with anti-A antibodies in the plasma'
	},
	{
		type: 'O',
		detail: 'has no antigens, but both anti-A and anti-B antibodies in the plasma'
	},
	{
		type: 'AB',
		detail: 'has both A and B antigens, but no antibodies'
	}
];

const bloodDonationTypes = [
	{
		name: 'Whole Blood Donation',
		description:
			'Whole blood is the most flexible type of donation. It can be transfused in its original form, or used to help multiple people when separated into its specific components of red cells, plasma and platelets.'
	},
	{
		name: 'Power Red Donation',
		description:
			'During a Power Red donation, you give a concentrated dose of red cells, the part of your blood used every day for those needing transfusions as part of their care. This type of donation uses an automated process that separates your red blood cells from the other blood components, and then safely and comfortably returns your plasma and platelets to you.'
	},
	{
		name: 'Platelet Donation',
		description:
			'Platelets are tiny cells in your blood that form clots and stop bleeding. Platelets are most often used by cancer patients and others facing life-threatening illnesses and injuries.'
	},
	{
		name: 'Plasma Donation',
		description:
			'During an AB Elite donation, you give plasma, a part of your blood used to treat patients in emergency situations. AB plasma can be given to anyone regardless of their blood type. Plasma is collected through an automated process that separates plasma from other blood components, then safely and comfortably returns your red blood cells and platelets to you. AB Elite maximizes your donation and takes just a few minutes longer than donating blood.'
	}
];

export default { Navbar, mainBloodGroups, bloodDonationTypes };
