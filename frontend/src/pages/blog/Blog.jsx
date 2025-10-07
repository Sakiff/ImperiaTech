import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useTheme } from "../../context/ThemeContext";
import {
  Calendar,
  User,
  ArrowRight,
  Search,
  Tag,
  BookOpen,
  Code,
  Smartphone,
  Database,
  Shield,
  Zap,
  Eye,
} from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "React 18 və Yeni Features: Nəyi Bilək?",
    excerpt:
      "React 18-in ən maraqlı yenilikləri, Concurrent Features və performans optimizasiyaları haqqında dərin baxış. Automatic batching, suspense və yeni hooklar praktiki nümunələrlə.",
    content: `React 18 bizə bir çox yenilik gətirdi. Concurrent rendering, automatic batching, və yeni hooklar kimi xüsusiyyətlər aplikasiyalarımızın performansını əhəmiyyətli dərəcədə yaxşılaşdırır.

## Concurrent Features
Concurrent mode React-in əsaslı yeniliklərindən biridir. Bu, komponentlərin render olunmasını prioritizasiya etməyə və daha yaxşı istifadəçi təcrübəsi yaratmağa imkan verir.

## Automatic Batching
React 18-dən etibarən bütün state yeniləmələri avtomatik olaraq batching olunur. Bu, çoxsaylı state dəyişiklikləri zamanı performansı yaxşılaşdırır.

## Yeni Hooklar
useId, useTransition, useDeferredValue kimi yeni hooklar kompleks aplikasiyaların idarə edilməsini asanlaşdırır.`,
    author: "Mirze Əliyev",
    date: "15 Yanvar 2024",
    category: "Frontend",
    tags: ["React", "JavaScript", "Web Development"],
    image: "/images/blog/react-18.jpg",
    views: 1247,
    featured: true,
  },
  {
    id: 2,
    title: ".NET 8 Performance Optimizasiya Təcrübələri",
    excerpt:
      ".NET 8 ilə gələn performance improvementları və real layihələrdə tətbiq etdiyimiz optimizasiya üsulları. Native AOT və Minimal APIs.",
    content: `.NET 8 bizə əhəmiyyətli performance yaxşılaşdırmaları gətirir. Native AOT, Minimal APIs və yeni GC improvementları ilə aplikasiyalarımız daha sürətli və effektiv işləyir.

## Native AOT
Native AOT (Ahead-of-Time) kompilyasiya .NET 8-in ən böyük yeniliklərindən biridir. Bu, aplikasiyaların daha sürətli başlanmasına və daha az memory istifadəsinə səbəb olur.

## Minimal APIs
Minimal APIs ilə daha az kod yazaraq daha sürətli API endpointləri yarada bilərik. Bu, xüsusilə microservices arxitekturasında böyük performans artımı təmin edir.

## GC Improvements
Yeni garbage collector improvementları memory management-u daha effektiv edir.`,
    author: "Hüseyn Həsənov",
    date: "12 Yanvar 2024",
    category: "Backend",
    tags: [".NET", "C#", "Performance"],
    image: "/images/blog/dotnet8.jpg",
    views: 892,
    featured: true,
  },
  {
    id: 3,
    title: "TypeScript 5.0: Yeni Xüsusiyyətlər və Best Practices",
    excerpt:
      "TypeScript 5.0 ilə gələn decorators, const type parameters və digər yeniliklər. Type safety və developer experience improvementları.",
    content: `TypeScript 5.0 bir çox yeni xüsusiyyət və improvement gətirir. Bu yeniliklər type safety-ni artırır və developer experience-i yaxşılaşdırır.

## Yeni Decorators
ECMAScript decorators artıq TypeScript-də dəstəklənir. Bu, daha oxunaqlı və maintainable kod yazmağa imkan verir.

## Const Type Parameters
Const type parameters ilə daha dəqiq type inference əldə edə bilərik. Bu, xüsusilə generic funksiyalarda faydalıdır.

## Module Resolution Improvements
Yeni module resolution alqoritmləri daha sürətli və dəqiq modul axtarışı təmin edir.`,
    author: "Sənan Ələkbərov",
    date: "10 Yanvar 2024",
    category: "Frontend",
    tags: ["TypeScript", "JavaScript", "Web Development"],
    image: "/images/blog/typescript5.jpg",
    views: 756,
    featured: false,
  },
  {
    id: 4,
    title: "Microservices Architecture: Design Patterns və Best Practices",
    excerpt:
      "Microservices arxitekturasında ən çox istifadə olunan design patternləri və real project təcrübələri. Service discovery, API gateway pattern.",
    content: `Microservices arxitekturası böyük və mürəkkəb sistemləri idarə etmək üçün effektiv bir yanaşmadır. Ancaq düzgün implementasiya etmək çox vacibdir.

## Service Discovery
Service discovery pattern microservices-in bir-birini tapmasını asanlaşdırır. Bu, xüsusilə dinamik mühitlərdə vacibdir.

## API Gateway Pattern
API Gateway bütün requestlərin keçdiyi mərkəzi nöqtədir. Bu, authentication, logging və rate limiting kimi cross-cutting concernləri idarə etməyə kömək edir.

## Circuit Breaker Pattern
Circuit breaker pattern sistemin sıradan çıxmasının qarşısını alır və graceful degradation təmin edir.`,
    author: "Hüseyn Səfərəliyev",
    date: "8 Yanvar 2024",
    category: "Backend",
    tags: ["Microservices", "Design Patterns"],
    image: "/images/blog/microservices.jpg",
    views: 634,
    featured: false,
  },
  {
    id: 5,
    title:
      "React Native 0.72: Yeni Xüsusiyyətlər və Performance Optimizasiyası",
    excerpt:
      "React Native 0.72 ilə gələn yeniliklər, Fabric architecture və performance improvementları. Real mobile app development təcrübələri.",
    content: `React Native 0.72 Fabric architecture və bir çox performance improvementları gətirir. Bu, mobile aplikasiyaların daha sürətli və smooth işləməsinə kömək edir.

## Fabric Architecture
Fabric yeni rendering system-dir ki, daha yaxşı performance və daha az memory istifadəsi təmin edir.

## New Architecture
Yeni architecture TypeScript ilə daha yaxşı inteqrasiya və daha yaxşı developer tools dəstəyi gətirir.

## Performance Improvements
Yeni GC improvements və daha effektiv bridge communication performance-u əhəmiyyətli dərəcədə yaxşılaşdırır.`,
    author: "Sənan Ələkbərov",
    date: "5 Yanvar 2024",
    category: "Mobile",
    tags: ["React Native", "Mobile", "JavaScript"],
    image: "/images/blog/react-native.jpg",
    views: 523,
    featured: false,
  },
  {
    id: 6,
    title: "Docker və Kubernetes: Container Orchestration Best Practices",
    excerpt:
      "Docker containerləri və Kubernetes orchestration. Production environment üçün security və performance best practices.",
    content: `Docker və Kubernetes modern application development-un əsas hissəsidir. Ancaq production environment-da düzgün konfiqurasiya etmək çox vacibdir.

## Container Security
Container security best practices - image vulnerability scanning, minimal base images, və proper user permissions.

## Kubernetes Best Practices
Resource limits, liveness/readiness probes, və proper logging/monitoring configuration.

## Monitoring və Logging
Prometheus, Grafana və ELK stack ilə effective monitoring və logging solutions.`,
    author: "Hüseyn Həsənov",
    date: "3 Yanvar 2024",
    category: "DevOps",
    tags: ["Docker", "Kubernetes", "DevOps"],
    image: "/images/blog/docker-k8s.jpg",
    views: 689,
    featured: false,
  },
  {
    id: 7,
    title: "Node.js 20: Yeni Features və Performance Improvements",
    excerpt:
      "Node.js 20 ilə gələn yeniliklər, experimental features və real-world performance test nəticələri.",
    content: `Node.js 20 bir çox yeni xüsusiyyət və performance improvement gətirir. Bu, server-side JavaScript development-u daha da inkişaf etdirir.

## Stable Test Runner
Artıq daxili test runner stable statusuna çatıb. Bu, external test framework-lərə olan asılılığı azaldır.

## Permission Model
Yeni permission model aplikasiyaların resource-lara erişimini məhdudlaşdırmağa imkan verir.

## V8 Engine Updates
V8 JavaScript engine 11.8-ə update olunub, bu da performance artımı gətirir.`,
    author: "Mirze Əliyev",
    date: "28 Dekabr 2023",
    category: "Backend",
    tags: ["Node.js", "JavaScript", "Backend"],
    image: "/images/blog/nodejs20.jpg",
    views: 598,
    featured: false,
  },
  {
    id: 8,
    title: "Web Security: OWASP Top 10 2023 və Prevention Strategies",
    excerpt:
      "OWASP Top 10 2023 yenilikləri, ən çox rast gəlinən security vulnerability-lər və onların qarşısının alınması üsulları.",
    content: `Web security hər zamankından daha vacibdir. OWASP Top 10 2023 ən kritik web application security risklərini təqdim edir.

## Broken Access Control
Access control vulnerability-ləri hələ də ən kritik risklərdən biridir. Proper authorization mechanisms tətbiq etmək vacibdir.

## Cryptographic Failures
Sensitive data-nın düzgün şifrələnməməsi böyük security risk yaradır. Modern encryption algorithms və proper key management vacibdir.

## Injection
SQL injection, NoSQL injection və digər injection attack-larının qarşısını almaq üçün proper input validation və parameterized queries istifadə etmək lazımdır.`,
    author: "Davud Qədirov",
    date: "25 Dekabr 2023",
    category: "Security",
    tags: ["Security", "OWASP", "Web Security"],
    image: "/images/blog/web-security.jpg",
    views: 723,
    featured: false,
  },
  {
    id: 9,
    title: "Python 3.11: Performance Breakthrough və Yeni Features",
    excerpt:
      "Python 3.11-in performance artımı, yeni syntax features və real benchmark nəticələri. Faster CPython layihəsi.",
    content: `Python 3.11 əhəmiyyətli performance artımı və yeni xüsusiyyətlər gətirir. Faster CPython layihəsi nəticəsində Python daha sürətli işləyir.

## Performance Improvements
Python 3.11 əvvəlki versiyalara nisbətən 25-60% daha sürətli işləyir. Bu, xüsusilə CPU-bound tasklarda əhəmiyyətlidir.

## Yeni Syntax Features
Exception groups və except* syntax daha mürəkkəb error handling senarilərinə imkan verir.

## Better Error Messages
Daha aydın və faydalı error messages debugging prosesini asanlaşdırır.`,
    author: "Sakif Rzayev",
    date: "20 Dekabr 2023",
    category: "Backend",
    tags: ["Python", "Programming", "Backend"],
    image: "/images/blog/python311.jpg",
    views: 645,
    featured: false,
  },
  {
    id: 10,
    title: "Vue 3 Composition API: Advanced Patterns və Real-World Usage",
    excerpt:
      "Vue 3 Composition API ilə kompleks aplikasiyaların qurulması, advanced patternlər və real project-də tətbiq etdiyimiz best practices.",
    content: `Vue 3 Composition API Vue.js development-da böyük bir inqilabdır. Bu, daha modular, reusable və maintainable kod yazmağa imkan verir.

## Composition vs Options API
Composition API-nin Options API-dan fərqləri və hansı hallarda istifadə edilməli olduğu. Composition API daha böyük və mürəkkəb aplikasiyalar üçün daha uyğundur.

## Custom Composables
Custom composable funksiyalarının yaradılması və real project-də istifadəsi. Bu, business logic-in reuse edilməsinə kömək edir.

## TypeScript Integration
Vue 3 Composition API-nin TypeScript ilə daha yaxşı inteqrasiyası. Bu, type safety-ni artırır və development experience-i yaxşılaşdırır.`,
    author: "Mirze Əliyev",
    date: "18 Dekabr 2023",
    category: "Frontend",
    tags: ["Vue.js", "JavaScript", "Composition API"],
    image: "/images/blog/vue3-composition.jpg",
    views: 587,
    featured: false,
  },
  {
    id: 11,
    title: "Next.js 14: App Router və Server Components",
    excerpt:
      "Next.js 14 ilə gələn App Router, Server Components və digər yeniliklər. Full-stack React development-da yeni imkanlar.",
    content: `Next.js 14 React ekosistemində böyük bir addımdır. App Router və Server Components ilə full-stack development daha da asanlaşır.

## App Router
Yeni App Router file-based routing sistemidir. Bu, daha intuitiv routing və daha yaxşı performance təmin edir.

## Server Components
React Server Components Next.js 14-də default olaraq aktivdir. Bu, client-side JavaScript-i azaldır və performance-u yaxşılaşdırır.

## Server Actions
Server Actions ilə client-dən birbaşa server funksiyalarını çağırmaq mümkündür. Bu, API endpoint-lərinə olan ehtiyacı azaldır.`,
    author: "Sənan Ələkbərov",
    date: "15 Dekabr 2023",
    category: "Frontend",
    tags: ["Next.js", "React", "Full-Stack"],
    image: "/images/blog/nextjs14.jpg",
    views: 812,
    featured: false,
  },
  {
    id: 12,
    title: "Spring Boot 3: Modern Java Development Practices",
    excerpt:
      "Spring Boot 3 ilə gələn yeniliklər, GraalVM native image support və modern Java development best practices.",
    content: `Spring Boot 3 Spring Framework 6 əsasında qurulub və bir çox yenilik gətirir. Bu, Java development-ı daha modern və effektiv edir.

## GraalVM Native Image
Spring Boot 3 GraalVM native image support ilə gəlir. Bu, aplikasiyaların daha sürətli başlanmasına və daha az memory istifadəsinə səbəb olur.

## Java 17+ Requirement
Spring Boot 3 minimum Java 17 tələb edir. Bu, modern Java xüsusiyyətlərindən istifadə etməyə imkan verir.

## Improved Observability
Yeni observability features ilə aplikasiyaların monitoring və debugging-i asanlaşır. Micrometer və distributed tracing dəstəyi.`,
    author: "Hüseyn Həsənov",
    date: "12 Dekabr 2023",
    category: "Backend",
    tags: ["Spring Boot", "Java", "Backend"],
    image: "/images/blog/spring-boot3.jpg",
    views: 534,
    featured: false,
  },
  {
    id: 13,
    title: "Flutter 3.0: Cross-Platform Development-da Yeni Horizontlar",
    excerpt:
      "Flutter 3.0 ilə gələn yeniliklər, desktop və web support, və real business app development təcrübələri.",
    content: `Flutter 3.0 cross-platform development-da böyük bir mərhələdir. Artıq iOS, Android, Web, Windows, macOS və Linux platformlarında tam dəstək.

## Desktop Support
Flutter 3.0 ilə desktop aplikasiyalarının development-ı stabil oldu. Windows, macOS və Linux üçün high-quality native aplikasiyalar yarada bilərik.

## Web Improvements
Web platformasında performance və compatibility əhəmiyyətli dərəcədə yaxşılaşıb. Progressive Web Apps (PWA) development asanlaşıb.

## Material 3
Material You design system (Material 3) dəstəyi ilə daha modern və personalizable UI-lar yarada bilərik.`,
    author: "Sənan Ələkbərov",
    date: "8 Dekabr 2023",
    category: "Mobile",
    tags: ["Flutter", "Dart", "Cross-Platform"],
    image: "/images/blog/flutter3.jpg",
    views: 678,
    featured: false,
  },
  {
    id: 14,
    title: "SwiftUI: Declarative UI Development iOS üçün",
    excerpt:
      "SwiftUI ilə modern iOS aplikasiyalarının hazırlanması, declarative syntax və real-world project architecture patterns.",
    content: `SwiftUI Apple-in modern UI framework-udür. Declarative syntax ilə daha az kod yazaraq daha çox iş görə bilərik.

## Declarative Syntax
SwiftUI-nin declarative yanaşması ilə UI state management daha asan olur. State dəyişdikdə UI avtomatik yenilənir.

## SwiftUI + Combine
Combine framework-u ilə reactive programming patterns tətbiq etmək. Bu, data flow-un daha yaxşı idarə edilməsinə kömək edir.

## Architecture Patterns
SwiftUI ilə MVVM, Redux və digər architecture patternlərinin tətbiqi. Real project-də ən yaxşı practices.`,
    author: "Sənan Ələkbərov",
    date: "5 Dekabr 2023",
    category: "Mobile",
    tags: ["SwiftUI", "iOS", "Apple"],
    image: "/images/blog/swiftui.jpg",
    views: 489,
    featured: false,
  },
];

const categories = [
  { name: "Frontend", icon: Code, count: 3 },
  { name: "Backend", icon: Database, count: 4 },
  { name: "Mobile", icon: Smartphone, count: 3 },
  { name: "Security", icon: Shield, count: 1 },
  { name: "DevOps", icon: Zap, count: 1 },
];

const popularTags = [
  "React",
  "JavaScript",
  "TypeScript",
  ".NET",
  "C#",
  "Node.js",
  "Python",
  "Docker",
  "Kubernetes",
  "Security",
  "Microservices",
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activePost, setActivePost] = useState(null);
  const { isDarkMode } = useTheme();
  const primaryColor = isDarkMode ? "#CAFF34" : "#1D6696";
  const cardBg = isDarkMode ? "bg-[#1A1A1A]" : "bg-white";
  const textColor = isDarkMode ? "text-white" : "text-gray-900";
  const secondaryText = isDarkMode ? "text-gray-400" : "text-gray-600";

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  useEffect(() => {
    if (activePost) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => (document.body.style.overflow = prev);
    }
  }, [activePost]);

  return (
    <div className={`min-h-screen py-8 px-4 sm:px-6 lg:px-8`}>
      <Helmet>
        <title>Blog | Imperia Tech</title>
        <meta
          name="description"
          content="Imperia Tech bloq səhifəsi - Texnologiya, proqramlaşdırma və development haqqında ən son məqalələr"
        />
      </Helmet>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${textColor}`}>
            <span className={`text-[${primaryColor}]`}>Tech</span> Blog
          </h1>
          <p
            className={`text-xl ${secondaryText} max-w-3xl mx-auto mb-8 leading-relaxed`}
          >
            Texnologiya, proqramlaşdırma və development dünyasından ən son
            xəbərlər, təcrübələr və best practices
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Featured Posts */}
            {featuredPosts.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h2
                  className={`text-2xl font-bold mb-6 ${textColor} flex items-center gap-2`}
                >
                  <Zap className="w-6 h-6" style={{ color: primaryColor }} />
                  Seçilmiş Məqalələr
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {featuredPosts.map((post) => (
                    <motion.div
                      key={post.id}
                      whileHover={{ y: -5 }}
                      className={`${cardBg} rounded-3xl overflow-hidden shadow-2xl cursor-pointer group relative`}
                      onClick={() => setActivePost(post)}
                    >
                      <div className="relative h-48 overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-[#CAFF34] to-[#1D6696] opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <BookOpen
                            className="w-16 h-16 opacity-50"
                            style={{ color: primaryColor }}
                          />
                        </div>
                        <div className="absolute top-4 left-4">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              isDarkMode
                                ? "bg-[#CAFF34] text-black"
                                : "bg-[#1D6696] text-white"
                            }`}
                          >
                            {post.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        <h3
                          className={`text-xl font-bold mb-3 ${textColor} group-hover:text-[${primaryColor}] transition-colors duration-300`}
                        >
                          {post.title}
                        </h3>
                        <p
                          className={`text-sm ${secondaryText} mb-4 line-clamp-2`}
                        >
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <User className="w-4 h-4" />
                              <span className={secondaryText}>
                                {post.author}
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span className={secondaryText}>{post.date}</span>
                            </div>
                          </div>
                          {/* readTime removed per request */}
                        </div>

                        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-700">
                          <div className="hidden lg:flex items-center gap-4 text-sm">
                            <div className="flex items-center gap-1">
                              <Eye className="w-4 h-4" />
                              <span className={secondaryText}>
                                {post.views}
                              </span>
                            </div>
                          </div>
                          <ArrowRight
                            className="w-5 h-5"
                            style={{ color: primaryColor }}
                          />
                        </div>

                        {/* Mobile-only absolute views badge (bottom-right) */}
                        <div
                          className={`absolute bottom-4 right-4 lg:hidden flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full ${
                            isDarkMode
                              ? "bg-black bg-opacity-60 text-white"
                              : "bg-white text-gray-900 shadow-md"
                          }`}
                        >
                          <Eye className="w-4 h-4" />
                          <span className={secondaryText}>{post.views}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Search Bar - Moved below featured posts */}
            {/* Mobile: Categories above search (hidden on lg) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className={`${cardBg} rounded-2xl p-4 mb-6 lg:hidden`}
            >
              <h3
                className={`text-lg font-bold mb-3 ${textColor} flex items-center gap-2`}
              >
                <Tag className="w-5 h-5" style={{ color: primaryColor }} />
                Kateqoriyalar
              </h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory("All")}
                  className={`px-3 py-2 rounded-lg text-sm transition-colors duration-200 ${
                    selectedCategory === "All"
                      ? `bg-[${primaryColor}] bg-opacity-20 text-[${primaryColor}] font-medium`
                      : secondaryText
                  }`}
                  style={
                    selectedCategory === "All"
                      ? { backgroundColor: `${primaryColor}20` }
                      : {}
                  }
                >
                  Hamısı{" "}
                  <span className={`ml-2 text-sm ${secondaryText}`}>
                    {blogPosts.length}
                  </span>
                </button>
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`px-3 py-2 rounded-lg text-sm transition-colors duration-200 ${
                      selectedCategory === category.name
                        ? `bg-[${primaryColor}] bg-opacity-20 text-[${primaryColor}] font-medium`
                        : secondaryText
                    }`}
                    style={
                      selectedCategory === category.name
                        ? { backgroundColor: `${primaryColor}20` }
                        : {}
                    }
                  >
                    <span className="flex items-center gap-2">
                      <category.icon className="w-4 h-4" />
                      {category.name}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8"
            >
              <div className="max-w-2xl relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Məqalələrdə axtar..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full pl-12 pr-4 py-4 rounded-2xl border-2 focus:border-[${primaryColor}] focus:outline-none transition-all duration-300 ${
                    isDarkMode
                      ? "bg-[#1A1A1A] border-gray-700 text-white"
                      : "bg-white border-gray-200 text-gray-900"
                  }`}
                />
              </div>
            </motion.div>

            {/* Regular Posts */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className={`text-2xl font-bold ${textColor}`}>
                  {selectedCategory === "All"
                    ? "Bütün Məqalələr"
                    : selectedCategory}
                </h2>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${secondaryText} bg-opacity-20`}
                >
                  {regularPosts.length} məqalə
                </span>
              </div>

              <div className="space-y-6">
                {regularPosts.map((post) => (
                  <motion.div
                    key={post.id}
                    whileHover={{ x: 8 }}
                    className={`${cardBg} rounded-2xl p-6 cursor-pointer group border-l-4 transition-all duration-300 relative`}
                    style={{ borderLeftColor: primaryColor }}
                    onClick={() => setActivePost(post)}
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              isDarkMode
                                ? "bg-gray-800 text-[#CAFF34]"
                                : "bg-gray-100 text-[#1D6696]"
                            }`}
                          >
                            {post.category}
                          </span>
                          <div className="flex items-center gap-4 text-sm">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span className={secondaryText}>{post.date}</span>
                            </div>
                            {/* readTime removed per request */}
                          </div>
                        </div>

                        <h3
                          className={`text-xl font-bold mb-3 ${textColor} group-hover:text-[${primaryColor}] transition-colors duration-300`}
                        >
                          {post.title}
                        </h3>
                        <p
                          className={`text-sm ${secondaryText} mb-4 leading-relaxed`}
                        >
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                              <User className="w-4 h-4" />
                              <span className={`text-sm ${secondaryText}`}>
                                {post.author}
                              </span>
                            </div>
                            <div className="hidden lg:flex items-center gap-4 text-sm">
                              <div className="flex items-center gap-1">
                                <Eye className="w-4 h-4" />
                                <span className={secondaryText}>
                                  {post.views}
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            {post.tags.slice(0, 2).map((tag, index) => (
                              <span
                                key={index}
                                className={`px-2 py-1 rounded text-xs ${
                                  isDarkMode
                                    ? "bg-gray-800 text-gray-300"
                                    : "bg-gray-100 text-gray-600"
                                }`}
                              >
                                {tag}
                              </span>
                            ))}
                            {post.tags.length > 2 && (
                              <span
                                className={`px-2 py-1 rounded text-xs ${
                                  isDarkMode
                                    ? "bg-gray-800 text-gray-300"
                                    : "bg-gray-100 text-gray-600"
                                }`}
                              >
                                +{post.tags.length - 2}
                              </span>
                            )}
                            {/* Mobile-only absolute views badge */}
                            <div
                              className={`absolute bottom-4 right-4 lg:hidden flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full ${
                                isDarkMode
                                  ? "bg-black bg-opacity-60 text-white"
                                  : "bg-white text-gray-900 shadow-md"
                              }`}
                            >
                              <Eye className="w-4 h-4" />
                              <span className={secondaryText}>
                                {post.views}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {regularPosts.length === 0 && (
                <div className={`text-center py-12 ${secondaryText}`}>
                  <BookOpen className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p>Heç bir məqalə tapılmadı</p>
                </div>
              )}
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="space-y-6 sticky top-8">
              {/* Categories */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className={`${cardBg} rounded-2xl p-6 hidden lg:block`}
              >
                <h3
                  className={`text-lg font-bold mb-4 ${textColor} flex items-center gap-2`}
                >
                  <Tag className="w-5 h-5" style={{ color: primaryColor }} />
                  Kateqoriyalar
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory("All")}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 ${
                      selectedCategory === "All"
                        ? `bg-[${primaryColor}] bg-opacity-20 text-[${primaryColor}] font-medium`
                        : `hover:bg-opacity-10 ${secondaryText}`
                    }`}
                    style={
                      selectedCategory === "All"
                        ? { backgroundColor: `${primaryColor}20` }
                        : {}
                    }
                  >
                    <span className="flex items-center justify-between">
                      <span>Hamısı</span>
                      <span className={`text-sm ${secondaryText}`}>
                        {blogPosts.length}
                      </span>
                    </span>
                  </button>

                  {categories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 ${
                        selectedCategory === category.name
                          ? `bg-[${primaryColor}] bg-opacity-20 text-[${primaryColor}] font-medium`
                          : `hover:bg-opacity-10 ${secondaryText}`
                      }`}
                      style={
                        selectedCategory === category.name
                          ? { backgroundColor: `${primaryColor}20` }
                          : {}
                      }
                    >
                      <span className="flex items-center justify-between">
                        <span className="flex items-center gap-2">
                          <category.icon className="w-4 h-4" />
                          {category.name}
                        </span>
                        <span className={`text-sm ${secondaryText}`}>
                          {category.count}
                        </span>
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Popular Tags */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className={`${cardBg} rounded-2xl p-6`}
              >
                <h3 className={`text-lg font-bold mb-4 ${textColor}`}>
                  Populyar Teqlər
                </h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-xs cursor-pointer transition-all duration-200 ${
                        isDarkMode
                          ? "bg-gray-800 text-gray-300 hover:bg-[#CAFF34] hover:text-black"
                          : "bg-gray-100 text-gray-600 hover:bg-[#1D6696] hover:text-white"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Post Modal */}
      {activePost && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center p-4 z-50"
          onClick={() => setActivePost(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className={`${cardBg} rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={() => setActivePost(null)}
                  className={`p-2 rounded-lg ${
                    isDarkMode ? "hover:bg-gray-800" : "hover:bg-gray-100"
                  }`}
                >
                  <ArrowRight className="w-6 h-6 rotate-180" />
                </button>
              </div>

              <div className="mb-6">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    isDarkMode
                      ? "bg-[#CAFF34] text-black"
                      : "bg-[#1D6696] text-white"
                  }`}
                >
                  {activePost.category}
                </span>
              </div>

              <h1 className={`text-3xl font-bold mb-4 ${textColor}`}>
                {activePost.title}
              </h1>

              <div className="flex items-center gap-6 mb-8 text-sm">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span className={secondaryText}>{activePost.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span className={secondaryText}>{activePost.date}</span>
                </div>
                {/* readTime removed from modal header per request */}
              </div>

              <div className="prose max-w-none">
                <p className={`text-lg ${secondaryText} leading-relaxed mb-6`}>
                  {activePost.content}
                </p>
              </div>

              <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-700">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <Eye className="w-5 h-5" />
                    <span className={secondaryText}>{activePost.views}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {activePost.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-xs ${
                        isDarkMode
                          ? "bg-gray-800 text-gray-300"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
