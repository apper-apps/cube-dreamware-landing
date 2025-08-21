import navigationData from "@/services/mockData/navigation.json";
import benefitPillsData from "@/services/mockData/benefitPills.json";
import comparisonData from "@/services/mockData/comparisonData.json";
import processStepsData from "@/services/mockData/processSteps.json";
import industriesData from "@/services/mockData/industries.json";
import testimonialsData from "@/services/mockData/testimonials.json";
import productsData from "@/services/mockData/products.json";

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const landingPageService = {
  async getNavigation() {
    await delay(200);
    return [...navigationData];
  },

  async getBenefitPills() {
    await delay(200);
    return [...benefitPillsData];
  },

  async getComparisonData() {
    await delay(300);
    return [...comparisonData];
  },

  async getProcessSteps() {
    await delay(300);
    return [...processStepsData];
  },

  async getIndustries() {
    await delay(300);
    return [...industriesData];
  },

  async getTestimonials() {
    await delay(250);
    return [...testimonialsData];
  },

  async getProducts() {
    await delay(300);
    return [...productsData];
  },

  async submitContactForm(formData) {
    await delay(1000);
    // Simulate form submission
    return {
      success: true,
      message: "Thank you for your interest! We'll be in touch soon."
    };
  }
};