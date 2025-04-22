// app/blog/[slug]/page.js
"use client";

import { motion } from 'framer-motion';
import { FiArrowLeft } from 'react-icons/fi';
import Link from 'next/link';
import Footer from '@/components/Footer';

// Define the type for a blog post
interface BlogPost {
  title: string;
  content: string;
  date: string;
  category: string;
  readTime: string;
}

// Define the type for the blog posts object
interface BlogPosts {
  [key: string]: BlogPost;
}

//export default function BlogPost({ params }: { params: { slug: string } }) {
  export default function BlogPost({ params }: { params: any }) {
//export default function BlogPost({ params }) {
  // Define the blog posts data (would normally come from CMS or API)
  const blogPosts: BlogPosts = {

    "new-public-finance-management-regulations": {
      title: "New Public Finance Management Regulations: An In-Depth Look at the 2023 Constitutional Amendments and Their Impact on County Budgets",
      content: `
        <p>In 2023, Kenya witnessed significant constitutional amendments that introduced sweeping reforms to the Public Finance Management (PFM) framework—especially as it pertains to county governments. These changes, driven by a need to increase transparency, accountability, and sustainability in fiscal policy, are already reshaping how counties plan, allocate, and account for public funds.</p>
        
        <h3>A Quick Recap: Why PFM Reforms Were Needed</h3>
        <p>Since the adoption of devolution in 2010, counties have received increasing responsibility in the management of public funds. However, recurring issues such as:</p>
        <ul>
          <li>Poor budget absorption rates</li>
          <li>Delayed disbursements</li>
          <li>Opaque procurement processes</li>
          <li>Rising wage bills have plagued many county administrations.</li>
        </ul>
        <p>The 2023 constitutional amendments sought to fix these systemic inefficiencies by revisiting the foundation of the Public Finance Management Act (2012) and aligning it with modern-day fiscal realities and best practices.</p>
        
        <h3>Key Highlights of the 2023 Amendments</h3>
        <h4>1. Strengthening the County Fiscal Responsibility Framework</h4>
        <p>The new regulations impose clear fiscal rules:</p>
        <ul>
          <li>Counties must limit recurrent expenditure to no more than 65% of their total budgets.</li>
          <li>At least 35% of county spending must now go to development projects, up from the previously recommended 30%.</li>
        </ul>
        <p>This shift aims to redirect funds toward infrastructure, healthcare, education, and other capital-intensive investments critical for local economic growth.</p>
        
        <h4>2. Mandatory Medium-Term Expenditure Frameworks (MTEFs)</h4>
        <p>Counties are now required to prepare rolling three-year budgets to align with national MTEFs. This ensures:</p>
        <ul>
          <li>Better long-term planning</li>
          <li>Fiscal discipline</li>
          <li>Alignment with national economic priorities</li>
        </ul>
        <p>It also enhances predictability in resource allocation and minimizes abrupt shifts in spending priorities.</p>
        
        <h4>3. Creation of the County Budget Oversight Committees</h4>
        <p>To enhance transparency, counties must now establish independent oversight committees. These include:</p>
        <ul>
          <li>Civil society representatives</li>
          <li>Professional associations</li>
          <li>Academia</li>
        </ul>
        <p>These bodies are tasked with reviewing budget proposals, tracking expenditure, and publishing independent audit reports.</p>
        
        <h4>4. Automated Real-Time Reporting Systems</h4>
        <p>The amendments also require all counties to adopt a centralized digital PFM system. The aim is to:</p>
        <ul>
          <li>Track real-time spending</li>
          <li>Monitor project implementation</li>
          <li>Improve data sharing with the Controller of Budget and Auditor General</li>
        </ul>
        <p>This is a major move toward minimizing manual processes, reducing corruption, and ensuring timely budget execution.</p>
        
        <h4>5. New Sanctions and Penalties</h4>
        <p>Public officials who violate the new regulations face harsher penalties, including:</p>
        <ul>
          <li>Personal financial liability for unauthorized spending</li>
          <li>Suspension or removal from office</li>
          <li>Prosecution under anti-corruption laws</li>
        </ul>
        <p>This marks a strong shift from the previously weak enforcement of PFM rules.</p>
        
        <h3>Impact on County Budgeting and Fiscal Policies</h3>
        <h4>Greater Accountability, but Higher Pressure</h4>
        <p>While the reforms are expected to improve accountability, county officials now face greater pressure to justify their budgets and implement projects within stricter timelines and tighter fiscal space.</p>
        
        <h4>Budget Restructuring and Staff Rationalization</h4>
        <p>Counties will need to restructure existing budgets to meet the new 35% development expenditure threshold. This may involve:</p>
        <ul>
          <li>Reducing wage bills</li>
          <li>Reprioritizing projects</li>
          <li>Eliminating ghost workers</li>
        </ul>
        <p>Some counties are already exploring Public-Private Partnerships (PPPs) to meet infrastructure demands without breaching expenditure ceilings.</p>
        
        <h4>Political Implications</h4>
        <p>Governors and Members of County Assembly (MCAs) will now have to defend their budgets before more robust scrutiny mechanisms. Political goodwill will be crucial in pushing development-focused budgets through the legislative process without being bogged down by competing interests.</p>
        
        <h4>Long-Term Benefits</h4>
        <p>If properly implemented, the 2023 PFM amendments could yield substantial long-term benefits:</p>
        <ul>
          <li>Improved service delivery</li>
          <li>More efficient use of public resources</li>
          <li>Greater citizen trust in county governments</li>
          <li>Enhanced alignment between county and national development goals</li>
        </ul>
        
        <h3>Challenges and Concerns</h3>
        <p>Despite the optimism, several challenges loom:</p>
        <ul>
          <li>Capacity gaps: Some counties lack the technical expertise to implement MTEFs or transition to digital platforms.</li>
          <li>Resistance from vested interests: Those benefiting from opaque procurement processes may resist change.</li>
          <li>Slow pace of institutional reform: Oversight bodies may take time to fully operationalize, especially in rural counties.</li>
        </ul>
        
        <h3>Conclusion</h3>
        <p>The 2023 constitutional amendments to Kenya's Public Finance Management framework mark a critical step toward a more disciplined and transparent fiscal culture in county governments. However, the true test lies in implementation, enforcement, and political will.</p>
        <p>Counties that embrace the changes will be better positioned to deliver meaningful development. As citizens, it's our collective responsibility to demand transparency and hold local leaders accountable to these new standards.</p>
        
        <h3>Final Thought</h3>
        <p>As Kenya moves further along the path of devolution, financial reforms such as these are vital in building a future where counties are not just administrative units—but engines of inclusive, people-centered development.</p>
      `,
      date: "March 15, 2023",
      category: "Policy Updates",
      readTime: "8 min read"
    },
    "workshop-modern-legislative-practices": {
      title: "Workshop Recap: Modern Legislative Practices",
      content: `
        <p>Training Session with 40+ County Officials | Nairobi, 2025</p>
        <p>In a rapidly evolving governance landscape, the need for effective, informed, and modern legislative approaches has never been greater. This was the guiding principle behind our Nairobi-based workshop, held in April 2025, where over 40 county officials gathered for an intensive training session on contemporary legislative techniques.</p>
        <p>Spanning two days, the workshop provided practical knowledge, hands-on exercises, and collaborative engagement aimed at refining legislative processes within devolved units.</p>
        
        <h3>Workshop Objectives</h3>
        <p>The training was designed to:</p>
        <ul>
          <li>Strengthen the capacity of county officials in modern legislative drafting and review.</li>
          <li>Introduce best practices in public participation and citizen engagement.</li>
          <li>Explore the impact of new 2023 constitutional amendments on county legislative work.</li>
          <li>Foster inter-county collaboration and peer learning.</li>
        </ul>
        
        <h3>Who Attended</h3>
        <p>Participants included:</p>
        <ul>
          <li>County Assembly clerks</li>
          <li>Legal counsels</li>
          <li>Committee chairs</li>
          <li>MCAs (Members of County Assembly)</li>
          <li>Legislative drafters</li>
        </ul>
        <p>Counties represented ranged from Kisumu to Turkana, showcasing a broad commitment across Kenya's devolved units to improve governance structures from the grassroots up.</p>
        
        <h3>Key Sessions and Takeaways</h3>
        <h4>1. The Role of Evidence-Based Legislation</h4>
        <p>Led by a panel of governance experts and policy analysts, this session stressed the importance of data-driven lawmaking. Officials learned how to:</p>
        <ul>
          <li>Analyze local socioeconomic data.</li>
          <li>Use evidence to guide legislative priorities.</li>
          <li>Draft Bills that reflect real community needs.</li>
        </ul>
        <p>"Laws must be built on facts, not assumptions," emphasized one facilitator. "When we legislate with evidence, we serve better."</p>
        
        <h4>2. Legislative Drafting in a Devolved Context</h4>
        <p>This hands-on session broke down:</p>
        <ul>
          <li>Clear structures of a well-drafted Bill.</li>
          <li>Common pitfalls in legal language.</li>
          <li>Techniques for aligning proposed laws with national statutes.</li>
        </ul>
        <p>Participants also discussed the impact of the 2023 constitutional amendments on legislative functions, especially around public finance, planning, and intergovernmental relations.</p>
        
        <h4>3. Citizen Participation and Public Engagement</h4>
        <p>One of the most animated sessions focused on making legislation more people-centered. Key takeaways included:</p>
        <ul>
          <li>How to organize inclusive public forums.</li>
          <li>Methods for collecting meaningful citizen feedback.</li>
          <li>Using digital platforms to promote legislative transparency.</li>
        </ul>
        <p>Several counties shared their success stories, including mobile consultation units and ward-level civic education drives.</p>
        
        <h4>4. Committee System Reforms</h4>
        <p>Participants analyzed models of effective committee operations, including:</p>
        <ul>
          <li>Streamlining legislative workflows.</li>
          <li>Strengthening committee reporting mechanisms.</li>
          <li>Ensuring oversight is timely and action-oriented.</li>
        </ul>
        <p>Practical exercises included mock committee hearings, giving attendees real-time experience on questioning techniques and report writing.</p>
        
        <h3>Collaboration and Networking</h3>
        <p>Beyond the content, the workshop was a vibrant platform for networking. Counties were encouraged to form regional legislative networks that would:</p>
        <ul>
          <li>Share resources</li>
          <li>Host joint consultative sessions</li>
          <li>Benchmark legislative achievements</li>
        </ul>
        <p>This peer-learning approach emphasized that no county works in isolation, and that collective strength improves the entire devolved system.</p>
        
        <h3>What's Next?</h3>
        <p>Following the workshop, participants committed to:</p>
        <ul>
          <li>Reviewing outdated county laws using the skills learned.</li>
          <li>Creating frameworks for regular legislative training within their counties.</li>
          <li>Advocating for budget allocation toward civic education and legislative capacity building.</li>
        </ul>
        <p>Each county received a legislative toolkit containing:</p>
        <ul>
          <li>Drafting templates</li>
          <li>Sample Bills</li>
          <li>Public engagement frameworks</li>
          <li>Digital tools for monitoring legislative progress</li>
        </ul>
        
        <h3>Final Word</h3>
        <p>The Nairobi workshop on Modern Legislative Practices was more than just a training—it was a rallying point for transformative governance. With empowered county officials and a shared commitment to excellence, the future of county legislation in Kenya looks sharper, smarter, and more responsive to the people it serves.</p>
      `,
      date: "February 28, 2023",
      category: "Events",
      readTime: "5 min read"
    }
  };


  const post = blogPosts[params.slug];
  //const post = blogPosts[params.slug];

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] bg-repeat"></div>
      </div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-100 rounded-full filter blur-3xl opacity-20"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Link 
            href="/#resources" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group"
          >
            <FiArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Resources
          </Link>
        </motion.div>

        {/* Article header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
            <span className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium">
              {post.category}
            </span>
            <div className="flex items-center text-gray-500 text-sm">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {post.title}
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-8"></div>
        </motion.div>

        {/* Article content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 shadow-xl text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Want more insights?</h3>
          <p className="text-blue-100 mb-6">Subscribe to our monthly legislative insights newsletter</p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </section>
    <Footer />
    </div>
  );
}