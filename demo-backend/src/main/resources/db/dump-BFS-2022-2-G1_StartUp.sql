--
-- PostgreSQL database dump
--

-- Dumped from database version 11.16 (Debian 11.16-0+deb10u1)
-- Dumped by pg_dump version 14.2

-- Started on 2023-02-02 12:59:20

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE "Fullstack_2022_2_G1";
--
-- TOC entry 3048 (class 1262 OID 202897)
-- Name: Fullstack_2022_2_G1; Type: DATABASE; Schema: -; Owner: -
--

CREATE DATABASE "Fullstack_2022_2_G1" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.UTF-8';


\connect "Fullstack_2022_2_G1"

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA public;


--
-- TOC entry 3049 (class 0 OID 0)
-- Dependencies: 3
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

--
-- TOC entry 197 (class 1259 OID 203480)
-- Name: contacts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.contacts (
    id integer NOT NULL,
    email character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    phone integer NOT NULL,
    surname1 character varying(255) NOT NULL,
    surname2 character varying(255) NOT NULL
);


--
-- TOC entry 196 (class 1259 OID 203478)
-- Name: contacts_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.contacts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3050 (class 0 OID 0)
-- Dependencies: 196
-- Name: contacts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.contacts_id_seq OWNED BY public.contacts.id;


--
-- TOC entry 214 (class 1259 OID 204386)
-- Name: business_sector; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.business_sector (
    id_business_sector integer DEFAULT nextval('public.contacts_id_seq'::regclass) NOT NULL,
    type_business_sector character varying(25) NOT NULL
);


--
-- TOC entry 207 (class 1259 OID 203558)
-- Name: entrepreneur; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.entrepreneur (
    id_entrepreneur integer NOT NULL,
    first_name character varying(50) NOT NULL,
    last_name character varying(50) NOT NULL,
    email character varying(50) NOT NULL,
    id_professional_profile integer NOT NULL,
    linkedin_profile character varying(100) NOT NULL
);


--
-- TOC entry 213 (class 1259 OID 204320)
-- Name: invester; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.invester (
    id_invester integer NOT NULL,
    email character varying(255) NOT NULL,
    id_business_sector integer NOT NULL,
    name character varying(255) NOT NULL,
    id_investment_range integer NOT NULL,
    id_startup_state integer NOT NULL
);


--
-- TOC entry 212 (class 1259 OID 204318)
-- Name: invester_id_invester_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.invester_id_invester_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3051 (class 0 OID 0)
-- Dependencies: 212
-- Name: invester_id_invester_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.invester_id_invester_seq OWNED BY public.invester.id_invester;


--
-- TOC entry 211 (class 1259 OID 204239)
-- Name: investment_range; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.investment_range (
    id_investment_range integer NOT NULL,
    value character varying(255) NOT NULL
);


--
-- TOC entry 210 (class 1259 OID 204237)
-- Name: investment_range_id_inversion_range_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.investment_range_id_inversion_range_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3052 (class 0 OID 0)
-- Dependencies: 210
-- Name: investment_range_id_inversion_range_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.investment_range_id_inversion_range_seq OWNED BY public.investment_range.id_investment_range;


--
-- TOC entry 209 (class 1259 OID 203864)
-- Name: professional_profile; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.professional_profile (
    id_professional_profile integer NOT NULL,
    type_professional_profile character varying(50) NOT NULL
);


--
-- TOC entry 199 (class 1259 OID 203491)
-- Name: profiles; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.profiles (
    id integer NOT NULL,
    description character varying(255),
    name character varying(255)
);


--
-- TOC entry 198 (class 1259 OID 203489)
-- Name: profiles_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.profiles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3053 (class 0 OID 0)
-- Dependencies: 198
-- Name: profiles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.profiles_id_seq OWNED BY public.profiles.id;


--
-- TOC entry 200 (class 1259 OID 203500)
-- Name: profiles_sections_map; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.profiles_sections_map (
    profile_id integer NOT NULL,
    section_id integer NOT NULL
);


--
-- TOC entry 206 (class 1259 OID 203556)
-- Name: public.Entrepreneur_id_entrepreneur_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."public.Entrepreneur_id_entrepreneur_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3054 (class 0 OID 0)
-- Dependencies: 206
-- Name: public.Entrepreneur_id_entrepreneur_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."public.Entrepreneur_id_entrepreneur_seq" OWNED BY public.entrepreneur.id_entrepreneur;


--
-- TOC entry 208 (class 1259 OID 203862)
-- Name: public.Professional_profile_id_professional_profile_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."public.Professional_profile_id_professional_profile_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3055 (class 0 OID 0)
-- Dependencies: 208
-- Name: public.Professional_profile_id_professional_profile_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."public.Professional_profile_id_professional_profile_seq" OWNED BY public.professional_profile.id_professional_profile;


--
-- TOC entry 216 (class 1259 OID 204449)
-- Name: startup; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.startup (
    id_startup integer NOT NULL,
    name character varying(150) NOT NULL,
    email character varying(30) NOT NULL,
    description character varying(250) NOT NULL,
    id_business_sector integer NOT NULL,
    id_startup_state integer NOT NULL,
    annual_invoicing integer NOT NULL,
    fundation_year timestamp without time zone NOT NULL,
    id_entrepreneur integer NOT NULL
);


--
-- TOC entry 215 (class 1259 OID 204447)
-- Name: public.Startup_id_startup_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."public.Startup_id_startup_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3056 (class 0 OID 0)
-- Dependencies: 215
-- Name: public.Startup_id_startup_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."public.Startup_id_startup_seq" OWNED BY public.startup.id_startup;


--
-- TOC entry 218 (class 1259 OID 204457)
-- Name: startup_state; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.startup_state (
    id_startup_state integer NOT NULL,
    type_startup character varying(50) NOT NULL
);


--
-- TOC entry 217 (class 1259 OID 204455)
-- Name: public.startups_state_id_startups_states_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."public.startups_state_id_startups_states_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3057 (class 0 OID 0)
-- Dependencies: 217
-- Name: public.startups_state_id_startups_states_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."public.startups_state_id_startups_states_seq" OWNED BY public.startup_state.id_startup_state;


--
-- TOC entry 202 (class 1259 OID 203505)
-- Name: sections; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sections (
    id integer NOT NULL,
    alias character varying(255),
    description character varying(255),
    name character varying(255)
);


--
-- TOC entry 201 (class 1259 OID 203503)
-- Name: sections_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.sections_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3058 (class 0 OID 0)
-- Dependencies: 201
-- Name: sections_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.sections_id_seq OWNED BY public.sections.id;


--
-- TOC entry 204 (class 1259 OID 203516)
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    login character varying(255),
    name character varying(255),
    nif character varying(255),
    password character varying(255),
    surname1 character varying(255),
    surname2 character varying(255)
);


--
-- TOC entry 203 (class 1259 OID 203514)
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3059 (class 0 OID 0)
-- Dependencies: 203
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- TOC entry 205 (class 1259 OID 203525)
-- Name: users_profiles_map; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users_profiles_map (
    user_id integer NOT NULL,
    profile_id integer NOT NULL
);


--
-- TOC entry 2847 (class 2604 OID 203483)
-- Name: contacts id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.contacts ALTER COLUMN id SET DEFAULT nextval('public.contacts_id_seq'::regclass);


--
-- TOC entry 2851 (class 2604 OID 203561)
-- Name: entrepreneur id_entrepreneur; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.entrepreneur ALTER COLUMN id_entrepreneur SET DEFAULT nextval('public."public.Entrepreneur_id_entrepreneur_seq"'::regclass);


--
-- TOC entry 2854 (class 2604 OID 204399)
-- Name: invester id_invester; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.invester ALTER COLUMN id_invester SET DEFAULT nextval('public.invester_id_invester_seq'::regclass);


--
-- TOC entry 2853 (class 2604 OID 204248)
-- Name: investment_range id_investment_range; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.investment_range ALTER COLUMN id_investment_range SET DEFAULT nextval('public.investment_range_id_inversion_range_seq'::regclass);


--
-- TOC entry 2852 (class 2604 OID 203867)
-- Name: professional_profile id_professional_profile; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.professional_profile ALTER COLUMN id_professional_profile SET DEFAULT nextval('public."public.Professional_profile_id_professional_profile_seq"'::regclass);


--
-- TOC entry 2848 (class 2604 OID 203494)
-- Name: profiles id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.profiles ALTER COLUMN id SET DEFAULT nextval('public.profiles_id_seq'::regclass);


--
-- TOC entry 2849 (class 2604 OID 203508)
-- Name: sections id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sections ALTER COLUMN id SET DEFAULT nextval('public.sections_id_seq'::regclass);


--
-- TOC entry 2856 (class 2604 OID 204452)
-- Name: startup id_startup; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.startup ALTER COLUMN id_startup SET DEFAULT nextval('public."public.Startup_id_startup_seq"'::regclass);


--
-- TOC entry 2857 (class 2604 OID 204460)
-- Name: startup_state id_startup_state; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.startup_state ALTER COLUMN id_startup_state SET DEFAULT nextval('public."public.startups_state_id_startups_states_seq"'::regclass);


--
-- TOC entry 2850 (class 2604 OID 203519)
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- TOC entry 3038 (class 0 OID 204386)
-- Dependencies: 214
-- Data for Name: business_sector; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.business_sector VALUES (13, 'Insurtech');
INSERT INTO public.business_sector VALUES (1, 'Legaltech');
INSERT INTO public.business_sector VALUES (2, 'Fintech');
INSERT INTO public.business_sector VALUES (3, 'Proptech');
INSERT INTO public.business_sector VALUES (4, 'Regtech');
INSERT INTO public.business_sector VALUES (5, 'Wealthtech');
INSERT INTO public.business_sector VALUES (6, 'Healthtech');
INSERT INTO public.business_sector VALUES (7, 'Edtech');
INSERT INTO public.business_sector VALUES (8, 'Traveltech');
INSERT INTO public.business_sector VALUES (9, 'Agrotech');
INSERT INTO public.business_sector VALUES (10, 'Femtech');
INSERT INTO public.business_sector VALUES (11, 'Foodtech');
INSERT INTO public.business_sector VALUES (12, 'Retailtech');
INSERT INTO public.business_sector VALUES (14, 'Madtech');
INSERT INTO public.business_sector VALUES (15, 'Cleantech');
INSERT INTO public.business_sector VALUES (16, 'Any Sector');
INSERT INTO public.business_sector VALUES (17, 'BioTech');
INSERT INTO public.business_sector VALUES (18, 'DeepTech');
INSERT INTO public.business_sector VALUES (19, 'AeroTech');


--
-- TOC entry 3021 (class 0 OID 203480)
-- Dependencies: 197
-- Data for Name: contacts; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.contacts VALUES (1, 'manuel@gmail.com', 'Manuel', 611222333, 'Garcia', 'Garcia');
INSERT INTO public.contacts VALUES (2, 'paula@gmail.com', 'Paula', 621222333, 'Iglesias', 'Amigo');
INSERT INTO public.contacts VALUES (3, 'martin@gmail.com', 'Martín', 641222333, 'Mouzo', 'Silva');
INSERT INTO public.contacts VALUES (4, 'david@gmail.com', 'David', 671222333, 'Viera', 'López');


--
-- TOC entry 3031 (class 0 OID 203558)
-- Dependencies: 207
-- Data for Name: entrepreneur; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.entrepreneur VALUES (210, 'Aracely', 'Pagac', 'Hershel_Braun52@gmail.com', 5, 'org');
INSERT INTO public.entrepreneur VALUES (211, 'Pearl', 'Ebert', 'Dayton.Schowalter79@gmail.com', 3, 'net');
INSERT INTO public.entrepreneur VALUES (212, 'Layla', 'Weissnat', 'Tina68@yahoo.com', 4, 'biz');
INSERT INTO public.entrepreneur VALUES (213, 'Katlynn', 'Walsh', 'Beth92@hotmail.com', 2, 'org');
INSERT INTO public.entrepreneur VALUES (214, 'Isac', 'Aufderhar', 'Quincy.Treutel@yahoo.com', 2, 'com');
INSERT INTO public.entrepreneur VALUES (215, 'Taryn', 'Russel', 'Aurelie64@hotmail.com', 2, 'org');
INSERT INTO public.entrepreneur VALUES (216, 'Bart', 'Rice', 'Catalina.Luettgen@hotmail.com', 2, 'biz');
INSERT INTO public.entrepreneur VALUES (217, 'Delphia', 'Nader', 'Abdul75@yahoo.com', 2, 'info');
INSERT INTO public.entrepreneur VALUES (218, 'Yasmin', 'Bahringer', 'Scarlett22@gmail.com', 3, 'name');
INSERT INTO public.entrepreneur VALUES (219, 'John', 'Crooks', 'Lizeth_Predovic99@yahoo.com', 4, 'com');
INSERT INTO public.entrepreneur VALUES (220, 'Darwin', 'Raynor', 'Ken.Watsica@yahoo.com', 4, 'biz');


--
-- TOC entry 3037 (class 0 OID 204320)
-- Dependencies: 213
-- Data for Name: invester; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.invester VALUES (225, 'info@maria.com', 11, 'María Venture', 2, 1);
INSERT INTO public.invester VALUES (175, 'info@cobenventures.com', 7, 'Coben Ventures', 1, 1);
INSERT INTO public.invester VALUES (176, 'info@perseo.com', 7, 'Perseo', 8, 5);
INSERT INTO public.invester VALUES (177, 'info@ship2bventures.com', 7, 'Ship2B Ventures', 7, 2);
INSERT INTO public.invester VALUES (178, 'info@mutuamadrilena.com', 13, 'MutuaMadrileña', 8, 3);
INSERT INTO public.invester VALUES (179, 'info@demeter.com', 5, 'Demeter', 8, 5);
INSERT INTO public.invester VALUES (180, 'info@thefoodtechlab.com', 11, 'thefoodtechlab', 5, 2);
INSERT INTO public.invester VALUES (181, 'info@bullnetcapital.com', 7, 'Bullnet Capital', 8, 4);
INSERT INTO public.invester VALUES (226, 'antonio@venture.com', 17, 'Antonio Venture', 2, 1);
INSERT INTO public.invester VALUES (184, 'info@faraday.com', 7, 'Faraday', 5, 2);
INSERT INTO public.invester VALUES (185, 'info@crowdcube.com', 4, 'Crowdcube', 3, 2);
INSERT INTO public.invester VALUES (186, 'info@inveready.com', 3, 'Inveready Venture', 7, 3);
INSERT INTO public.invester VALUES (187, 'info@exponcapital.com', 11, 'expon Capital', 7, 4);
INSERT INTO public.invester VALUES (189, 'info@sabadellvd.com', 2, 'Sabadell VDebt', 6, 2);
INSERT INTO public.invester VALUES (190, 'info@fellowfunders.com', 16, 'fellowfunders', 7, 2);
INSERT INTO public.invester VALUES (192, 'info@beablecapital.com', 14, 'beable capital', 3, 2);
INSERT INTO public.invester VALUES (193, 'info@origenventures.com', 18, 'origin ventures', 4, 2);
INSERT INTO public.invester VALUES (194, 'info@berriup.com', 16, 'Berriup', 1, 1);
INSERT INTO public.invester VALUES (195, 'info@bfaero.com', 19, 'BFAero', 1, 1);
INSERT INTO public.invester VALUES (196, 'info@angels.com', 16, 'Angels', 2, 1);
INSERT INTO public.invester VALUES (197, 'info@wayra.com', 16, 'wayra', 3, 1);
INSERT INTO public.invester VALUES (198, 'info@eseedangels.com', 16, 'eseed angels', 2, 1);
INSERT INTO public.invester VALUES (201, 'armand.co@gmail.com', 9, 'Armand&Co', 3, 4);
INSERT INTO public.invester VALUES (205, 'info@arloventure.com', 6, 'Arlo Venture', 3, 3);
INSERT INTO public.invester VALUES (183, 'info@amadeus.com', 17, 'Amadeus Venture', 5, 2);


--
-- TOC entry 3035 (class 0 OID 204239)
-- Dependencies: 211
-- Data for Name: investment_range; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.investment_range VALUES (2, '50K-100K');
INSERT INTO public.investment_range VALUES (3, '100k-200K');
INSERT INTO public.investment_range VALUES (4, '200K-300K');
INSERT INTO public.investment_range VALUES (5, '300K-700K');
INSERT INTO public.investment_range VALUES (6, '700K-1M');
INSERT INTO public.investment_range VALUES (7, '1M-3M');
INSERT INTO public.investment_range VALUES (9, '+7M');
INSERT INTO public.investment_range VALUES (8, '3M-7M');
INSERT INTO public.investment_range VALUES (1, '25k-50K');


--
-- TOC entry 3033 (class 0 OID 203864)
-- Dependencies: 209
-- Data for Name: professional_profile; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.professional_profile VALUES (1, 'Ingenieros de Software');
INSERT INTO public.professional_profile VALUES (4, 'Director creativo');
INSERT INTO public.professional_profile VALUES (5, 'Dirección de empresa');
INSERT INTO public.professional_profile VALUES (6, 'Marketing Digital');
INSERT INTO public.professional_profile VALUES (7, 'Profesionales en ventas');
INSERT INTO public.professional_profile VALUES (8, 'Advisor');
INSERT INTO public.professional_profile VALUES (2, 'Desarrollador Big-Data');
INSERT INTO public.professional_profile VALUES (3, 'Desarrollador de App Móvil');


--
-- TOC entry 3023 (class 0 OID 203491)
-- Dependencies: 199
-- Data for Name: profiles; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.profiles VALUES (1, 'Acceso general', 'Administrador');
INSERT INTO public.profiles VALUES (3, 'Acceso limitado startup', 'Startup');
INSERT INTO public.profiles VALUES (2, 'Acceso limitado inversor', 'Inversor');


--
-- TOC entry 3024 (class 0 OID 203500)
-- Dependencies: 200
-- Data for Name: profiles_sections_map; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.profiles_sections_map VALUES (1, 1);
INSERT INTO public.profiles_sections_map VALUES (1, 2);
INSERT INTO public.profiles_sections_map VALUES (1, 3);
INSERT INTO public.profiles_sections_map VALUES (1, 4);
INSERT INTO public.profiles_sections_map VALUES (3, 2);
INSERT INTO public.profiles_sections_map VALUES (2, 3);


--
-- TOC entry 3026 (class 0 OID 203505)
-- Dependencies: 202
-- Data for Name: sections; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.sections VALUES (1, 'CONTACTS', 'Perfiles y secciones a los que puede acceder cada perfil.', 'Contactos');
INSERT INTO public.sections VALUES (2, 'INVESTORS', 'Perfiles y secciones a los que puede acceder cada perfil.', 'Investors');
INSERT INTO public.sections VALUES (3, 'STARTUPS', 'Perfiles y secciones a los que puede acceder cada perfil.', 'Startups');
INSERT INTO public.sections VALUES (4, 'USERS', 'Perfiles y secciones a los que puede acceder cada perfil.', 'Users');


--
-- TOC entry 3040 (class 0 OID 204449)
-- Dependencies: 216
-- Data for Name: startup; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.startup VALUES (62, 'Stemy Energy', 'info@stemyenergy.com', 'Stemy Energy tiene el objetivo de fomentar la reducción tanto de la factura energética de los clientes finales como de su huella de carbono', 14, 3, 300000, '2021-11-17 01:00:00', 215);
INSERT INTO public.startup VALUES (63, 'Neuraptic AI', 'info@neurapticai.com', 'Neuraptic AI es una spin-off de la Universidad Pública de Navarra (UPNA) que ofrece soluciones de Inteligencia Artificial, con tecnología Machine Learning', 6, 1, 75000, '2021-08-26 02:00:00', 219);
INSERT INTO public.startup VALUES (64, 'okCargo', 'info@okcargo.com', 'OkCargo es una plataforma donde se puede contratar transporte de mercancías de carga completa.', 12, 3, 300000, '2021-01-16 01:00:00', 214);
INSERT INTO public.startup VALUES (65, 'Grodi Tech', 'info@groditech.com', 'Grodi Tech consigue detectar plagas y enfermedades de manera temprana en cultivos de invernaderos.', 9, 1, 40000, '2021-01-05 01:00:00', 214);
INSERT INTO public.startup VALUES (66, 'PandaGo', 'info@pandago.com', 'PandaGo es una plataforma de renting de vehículos eléctricos para empresas. Integra un marketplace con un amplio catálogo de vehículos eléctricos en renting flexible', 8, 3, 1000000, '2020-07-21 02:00:00', 216);
INSERT INTO public.startup VALUES (68, 'Tuio', 'info@tuio.com', 'Tuio es una Insurtech que ofrece seguros de hogar 100% digitales y adaptados a las necesidades del siglo XXI.', 13, 3, 775000, '2021-06-05 02:00:00', 219);
INSERT INTO public.startup VALUES (69, 'kaleidos', 'info@kaleidos.com', 'Kaleidos está especializada en el desarrollo de productos basados en software libre para grandes organizaciones y startups tecnológicas de ámbito nacional e internacional.', 16, 5, 2400000, '2019-06-05 02:00:00', 217);
INSERT INTO public.startup VALUES (70, 'GoPick', 'info@gopick.com', 'GoPick es una plataforma que digitaliza el consumo de comida y bebida en grandes recintos de masas, permitiendo a los usuarios pedir y pagar con su móvil todo lo que se venda en el recinto', 11, 2, 125000, '2021-07-09 02:00:00', 213);
INSERT INTO public.startup VALUES (67, 'LifeCole', 'info@lifecole.com', 'Lifecole es una plataforma que ofrece clases extraescolares online para niños entre 6-16 años, con educadores expertos, para grupos reducidos (5 alumnos de media).', 7, 2, 100000, '2020-09-21 02:00:00', 219);
INSERT INTO public.startup VALUES (56, 'Brava Fabric', 'info@bravafabrics.com', 'Brava Fabrics fabrica prendas atemporales. Produce de forma local y con materiales sostenibles.', 17, 3, 75000, '2022-01-23 01:00:00', 216);
INSERT INTO public.startup VALUES (55, 'Inespay', 'info@inespay.com', 'Inespay es un proveedor de servicios de iniciación de pagos que digitaliza y adecúa el pago mediante transferencia bancaria a las necesidades de los pagos digitales en internet. ', 2, 1, 10000, '2022-01-14 01:00:00', 218);
INSERT INTO public.startup VALUES (57, 'Grodi Tech', 'info@groditech.com', 'Grodi Tech consigue detectar plagas y enfermedades de manera temprana en cultivos de invernaderos.', 9, 1, 10000, '2022-09-15 02:00:00', 220);
INSERT INTO public.startup VALUES (60, 'Lexy', 'info@lexy.com', 'exy ayuda a crear contenido para marketing digital a través de Inteligencia Artificial. La plataforma se lanza en noviembre de 2022', 18, 1, 40000, '2022-03-02 01:00:00', 215);
INSERT INTO public.startup VALUES (50, 'TheGravityWave', 'info@thegravitywave.com', 'The Gravity Wave busca limpiar el plástico de mares y océanos involucrando a empresas, entidades y particulares; prevenir que el plástico que todavía se produce termine en el agua;', 15, 2, 50000, '2021-06-14 02:00:00', 213);
INSERT INTO public.startup VALUES (51, 'Cruwi', 'info@cruwi.com', 'CRUWI busca revolucionar la forma en la que las tiendas online adquieren nuevos clientes y estos recomiendan sus marcas favoritas.', 7, 1, 25000, '2022-02-01 01:00:00', 214);
INSERT INTO public.startup VALUES (52, 'HeuraFoods', 'info@heurerafoods.com', 'Heura es una foodtech que crean sol animales estén fuera de la ecuación deuciones no cárnicas y buscan dejar obsoleto el actual sistema alimentario y acelerar el cambio', 11, 5, 1500000, '2021-03-28 01:00:00', 215);
INSERT INTO public.startup VALUES (54, 'TherapyChat', 'info@terapychat.com', 'TherapyChat actúa como punto de encuentro entre psicólogos que buscan ofrecer sus servicios de forma online ', 6, 4, 2200000, '2019-07-20 02:00:00', 217);
INSERT INTO public.startup VALUES (58, 'Orquest', 'info@orquest.com', 'Orquest es un software de planificación y gestión de personal para el mundo retail y de restauración.', 12, 3, 400000, '2021-02-02 01:00:00', 220);
INSERT INTO public.startup VALUES (59, 'MIM habits', 'info@mimhabits.com', 'MIM Habits combinan ciencia y tradición para crear alimentos con propiedades avanzadas capaces de luchar contra dolencias.', 11, 2, 75000, '2022-03-12 01:00:00', 217);
INSERT INTO public.startup VALUES (61, 'Bubbo', 'info@bubbo.com', 'Bubbo ahorra el tiempo que los usuarios destinan a buscar contenido en sus plataformas de streaming', 1, 1, 40000, '2022-06-16 02:00:00', 210);
INSERT INTO public.startup VALUES (47, 'Cooltra', 'info@contra.com', 'Cooltra está especializada en soluciones sostenibles de movilidad sobre dos ruedas en Europa.', 8, 5, 2000000, '2016-06-20 02:00:00', 210);
INSERT INTO public.startup VALUES (48, 'ifeel', 'info@ifeel.com', 'Ifeel es una plataforma de apoyo psicológico para individuos y empresas. Combina inteligencia artificial con terapia individual', 6, 4, 3000000, '2019-01-20 01:00:00', 211);
INSERT INTO public.startup VALUES (49, 'Fudeat', 'info@fedeat.com', 'Fudeat es una plataforma digital de catering corporativo. Ha desarrollado una web para la contratación de servicios de catering en España', 11, 2, 400000, '2020-03-10 01:00:00', 212);


--
-- TOC entry 3042 (class 0 OID 204457)
-- Dependencies: 218
-- Data for Name: startup_state; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.startup_state VALUES (1, 'Pre-Seed');
INSERT INTO public.startup_state VALUES (2, 'Seed');
INSERT INTO public.startup_state VALUES (3, 'Early Stage');
INSERT INTO public.startup_state VALUES (4, 'Growth Stage');
INSERT INTO public.startup_state VALUES (5, 'Scaleup');
INSERT INTO public.startup_state VALUES (7, 'Exit');


--
-- TOC entry 3028 (class 0 OID 203516)
-- Dependencies: 204
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (2, 'zaira', 'zaira', '', 'qjp8ekdcq5HclYs2Hp6fAA==', 's', 's');
INSERT INTO public.users VALUES (77, 'paula', 'Paula', NULL, 'WHBCUKNzntuZbryA6/qSZw==', 'Iglesias', 'Amigo');
INSERT INTO public.users VALUES (78, 'martin', 'Martin', NULL, 'njxb9u6pHDXs+nsrTgZYWg==', 'Mouzo', 'Silva');
INSERT INTO public.users VALUES (79, 'david', 'David', NULL, '/iZhh3htdvaupJHTF8j94Q==', 'Viera', 'López');
INSERT INTO public.users VALUES (80, 'manuel', 'Manuel', NULL, 'DtEcuKncVEBnRTDnAsQ0PA==', 'Garcia', 'Garcia');
INSERT INTO public.users VALUES (1, 'demo', 'Demo', NULL, 'C5rCRzh9s2DPHYrnnLS/eg==', 'Demo', NULL);
INSERT INTO public.users VALUES (81, 'Armand', 'Armando', NULL, 'KrwbpN8kTPDednh7nMfvuw==', 'Iglesias', 'Ganado');
INSERT INTO public.users VALUES (82, 'andres', 'andres', NULL, 'p04zlVMe62enaD2o4ba6Zw==', 'pepe', 'paula');
INSERT INTO public.users VALUES (83, 'Arlo', 'Arlo', NULL, 'qfJhWwUQJ/7zEwEoIheopg==', 'Gomez', 'pEREZ');
INSERT INTO public.users VALUES (84, 'antonio', 'Antonio', NULL, 'U6oICqySDaX4irZ0i5+ufg==', 'López', 'Garcia');
INSERT INTO public.users VALUES (85, 'pepe', 'Pepe', NULL, 'ngIRCqDnV7JpGG02z+4aqA==', 'Gonzalez', 'Gonzalez');
INSERT INTO public.users VALUES (86, 'laura', 'Laura', NULL, '3NZEFLTk652nMBnUXfwytw==', 'Perez', 'Garcia');
INSERT INTO public.users VALUES (87, 'Angel', 'Angel', NULL, '7vZQONKuoKdf9+UWn+M7uQ==', 'Perez', 'Perez');
INSERT INTO public.users VALUES (88, 'Venture', 'Venture', NULL, 'q+dlnW5/UvbPZxzBuvR5Vw==', 'Capital', 'Venture');
INSERT INTO public.users VALUES (89, 'Pepe', 'Pepe', NULL, '39Ci3pcjIEguXziVhIyZxQ==', 'potamo', 'potamo');
INSERT INTO public.users VALUES (90, 'Zaqueo', 'Zaqueo', NULL, 'YeQZ3aqkFu9rLIKYgT8nCw==', 'Javier', 'Represas');
INSERT INTO public.users VALUES (91, 'Antonio', 'Antonio', NULL, 'SbZhydoUZrdUsDAQQZGJIg==', 'Fernandez', 'Lopez');
INSERT INTO public.users VALUES (92, 'prueba', 'prueba', NULL, 'kKfAJHsKHq5I7KaKgRQw/Q==', 'prueba', 'prueba');
INSERT INTO public.users VALUES (93, 'María', 'María', NULL, 'wsKgvOYJl2O5ToroVfq3UQ==', 'Pérez', 'Perga');


--
-- TOC entry 3029 (class 0 OID 203525)
-- Dependencies: 205
-- Data for Name: users_profiles_map; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users_profiles_map VALUES (1, 1);
INSERT INTO public.users_profiles_map VALUES (77, 2);
INSERT INTO public.users_profiles_map VALUES (78, 3);
INSERT INTO public.users_profiles_map VALUES (79, 2);
INSERT INTO public.users_profiles_map VALUES (80, 3);
INSERT INTO public.users_profiles_map VALUES (81, 2);
INSERT INTO public.users_profiles_map VALUES (82, 2);
INSERT INTO public.users_profiles_map VALUES (83, 2);
INSERT INTO public.users_profiles_map VALUES (84, 2);
INSERT INTO public.users_profiles_map VALUES (85, 2);
INSERT INTO public.users_profiles_map VALUES (86, 2);
INSERT INTO public.users_profiles_map VALUES (87, 2);
INSERT INTO public.users_profiles_map VALUES (88, 2);
INSERT INTO public.users_profiles_map VALUES (89, 2);
INSERT INTO public.users_profiles_map VALUES (90, 2);
INSERT INTO public.users_profiles_map VALUES (91, 2);
INSERT INTO public.users_profiles_map VALUES (92, 2);
INSERT INTO public.users_profiles_map VALUES (93, 2);


--
-- TOC entry 3060 (class 0 OID 0)
-- Dependencies: 196
-- Name: contacts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.contacts_id_seq', 19, true);


--
-- TOC entry 3061 (class 0 OID 0)
-- Dependencies: 212
-- Name: invester_id_invester_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.invester_id_invester_seq', 227, true);


--
-- TOC entry 3062 (class 0 OID 0)
-- Dependencies: 210
-- Name: investment_range_id_inversion_range_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.investment_range_id_inversion_range_seq', 8, true);


--
-- TOC entry 3063 (class 0 OID 0)
-- Dependencies: 198
-- Name: profiles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.profiles_id_seq', 2, true);


--
-- TOC entry 3064 (class 0 OID 0)
-- Dependencies: 206
-- Name: public.Entrepreneur_id_entrepreneur_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."public.Entrepreneur_id_entrepreneur_seq"', 220, true);


--
-- TOC entry 3065 (class 0 OID 0)
-- Dependencies: 208
-- Name: public.Professional_profile_id_professional_profile_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."public.Professional_profile_id_professional_profile_seq"', 8, true);


--
-- TOC entry 3066 (class 0 OID 0)
-- Dependencies: 215
-- Name: public.Startup_id_startup_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."public.Startup_id_startup_seq"', 84, true);


--
-- TOC entry 3067 (class 0 OID 0)
-- Dependencies: 217
-- Name: public.startups_state_id_startups_states_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."public.startups_state_id_startups_states_seq"', 7, true);


--
-- TOC entry 3068 (class 0 OID 0)
-- Dependencies: 201
-- Name: sections_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.sections_id_seq', 24, true);


--
-- TOC entry 3069 (class 0 OID 0)
-- Dependencies: 203
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 94, true);


--
-- TOC entry 2875 (class 2606 OID 203563)
-- Name: entrepreneur Entrepreneur_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.entrepreneur
    ADD CONSTRAINT "Entrepreneur_pk" PRIMARY KEY (id_entrepreneur);


--
-- TOC entry 2877 (class 2606 OID 203869)
-- Name: professional_profile Professional_profile_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.professional_profile
    ADD CONSTRAINT "Professional_profile_pk" PRIMARY KEY (id_professional_profile);


--
-- TOC entry 2885 (class 2606 OID 204454)
-- Name: startup Startup_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.startup
    ADD CONSTRAINT "Startup_pk" PRIMARY KEY (id_startup);


--
-- TOC entry 2883 (class 2606 OID 204650)
-- Name: business_sector business_sector_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.business_sector
    ADD CONSTRAINT business_sector_pk PRIMARY KEY (id_business_sector);


--
-- TOC entry 2859 (class 2606 OID 203488)
-- Name: contacts contacts_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.contacts
    ADD CONSTRAINT contacts_pkey PRIMARY KEY (id);


--
-- TOC entry 2881 (class 2606 OID 204393)
-- Name: invester invester_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.invester
    ADD CONSTRAINT invester_pkey PRIMARY KEY (id_invester);


--
-- TOC entry 2879 (class 2606 OID 204250)
-- Name: investment_range investment_range_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.investment_range
    ADD CONSTRAINT investment_range_pk PRIMARY KEY (id_investment_range);


--
-- TOC entry 2863 (class 2606 OID 203499)
-- Name: profiles profiles_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.profiles
    ADD CONSTRAINT profiles_pkey PRIMARY KEY (id);


--
-- TOC entry 2865 (class 2606 OID 203513)
-- Name: sections sections_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sections
    ADD CONSTRAINT sections_pkey PRIMARY KEY (id);


--
-- TOC entry 2887 (class 2606 OID 204462)
-- Name: startup_state startups_state_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.startup_state
    ADD CONSTRAINT startups_state_pk PRIMARY KEY (id_startup_state);


--
-- TOC entry 2867 (class 2606 OID 203533)
-- Name: sections uk_3hhqmvx0pt70xjvmjdo5a76go; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sections
    ADD CONSTRAINT uk_3hhqmvx0pt70xjvmjdo5a76go UNIQUE (alias);


--
-- TOC entry 2861 (class 2606 OID 203531)
-- Name: contacts uk_9mg1wlguu09et002069e9qeum; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.contacts
    ADD CONSTRAINT uk_9mg1wlguu09et002069e9qeum UNIQUE (phone);


--
-- TOC entry 2869 (class 2606 OID 203535)
-- Name: users uk_ow0gan20590jrb00upg3va2fn; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT uk_ow0gan20590jrb00upg3va2fn UNIQUE (login);


--
-- TOC entry 2871 (class 2606 OID 203524)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- TOC entry 2873 (class 2606 OID 203529)
-- Name: users_profiles_map users_profiles_map_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users_profiles_map
    ADD CONSTRAINT users_profiles_map_pkey PRIMARY KEY (user_id, profile_id);


--
-- TOC entry 2892 (class 2606 OID 203885)
-- Name: entrepreneur Entrepreneur_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.entrepreneur
    ADD CONSTRAINT "Entrepreneur_fk0" FOREIGN KEY (id_professional_profile) REFERENCES public.professional_profile(id_professional_profile);


--
-- TOC entry 2895 (class 2606 OID 204651)
-- Name: invester FK_8CMZ8SZWS; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.invester
    ADD CONSTRAINT "FK_8CMZ8SZWS" FOREIGN KEY (id_business_sector) REFERENCES public.business_sector(id_business_sector);


--
-- TOC entry 2894 (class 2606 OID 204608)
-- Name: invester fk9d4lpln969j8q4mrpl2v87nk3; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.invester
    ADD CONSTRAINT fk9d4lpln969j8q4mrpl2v87nk3 FOREIGN KEY (id_investment_range) REFERENCES public.investment_range(id_investment_range);


--
-- TOC entry 2898 (class 2606 OID 204656)
-- Name: startup fkauy1y6uym68jxr3ywaya3ns8l; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.startup
    ADD CONSTRAINT fkauy1y6uym68jxr3ywaya3ns8l FOREIGN KEY (id_business_sector) REFERENCES public.business_sector(id_business_sector);


--
-- TOC entry 2891 (class 2606 OID 203551)
-- Name: users_profiles_map fkgu8qveimyui706fn78n4xbenf; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users_profiles_map
    ADD CONSTRAINT fkgu8qveimyui706fn78n4xbenf FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 2888 (class 2606 OID 203536)
-- Name: profiles_sections_map fkkqferkfgrrnho62b21rya9ej9; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.profiles_sections_map
    ADD CONSTRAINT fkkqferkfgrrnho62b21rya9ej9 FOREIGN KEY (section_id) REFERENCES public.sections(id);


--
-- TOC entry 2889 (class 2606 OID 203541)
-- Name: profiles_sections_map fknbjkd2pgwcyijblewp1d33rox; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.profiles_sections_map
    ADD CONSTRAINT fknbjkd2pgwcyijblewp1d33rox FOREIGN KEY (profile_id) REFERENCES public.profiles(id);


--
-- TOC entry 2897 (class 2606 OID 204504)
-- Name: startup fksm4mfcy8y5dqvy7hlq6ash919; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.startup
    ADD CONSTRAINT fksm4mfcy8y5dqvy7hlq6ash919 FOREIGN KEY (id_entrepreneur) REFERENCES public.entrepreneur(id_entrepreneur);


--
-- TOC entry 2890 (class 2606 OID 203546)
-- Name: users_profiles_map fksv94wyv9yb3b2hmvr5f48o281; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users_profiles_map
    ADD CONSTRAINT fksv94wyv9yb3b2hmvr5f48o281 FOREIGN KEY (profile_id) REFERENCES public.profiles(id);


--
-- TOC entry 2893 (class 2606 OID 204494)
-- Name: invester invester_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.invester
    ADD CONSTRAINT invester_fk FOREIGN KEY (id_startup_state) REFERENCES public.startup_state(id_startup_state);


--
-- TOC entry 2896 (class 2606 OID 204463)
-- Name: startup startup_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.startup
    ADD CONSTRAINT startup_fk FOREIGN KEY (id_startup_state) REFERENCES public.startup_state(id_startup_state);


-- Completed on 2023-02-02 12:59:24

--
-- PostgreSQL database dump complete
--

