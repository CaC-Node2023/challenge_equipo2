-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 18, 2023 at 08:04 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `funkodb`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(100) NOT NULL,
  `category_description` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`category_id`, `category_name`, `category_description`) VALUES
(1, 'Funkos', 'Figuras coleccionables Funko Pop'),
(2, 'Remeras', 'Remeras de anime, series, peliculas y más'),
(3, 'LLaveros', 'Llaveros coleccionables');

-- --------------------------------------------------------

--
-- Table structure for table `licence`
--

CREATE TABLE `licence` (
  `licence_id` int(11) NOT NULL,
  `licence_name` varchar(45) NOT NULL,
  `licence_description` varchar(255) NOT NULL,
  `licence_image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `licence`
--

INSERT INTO `licence` (`licence_id`, `licence_name`, `licence_description`, `licence_image`) VALUES
(1, 'Pokemon', 'Atrapa todos los que puedas y disfruta de una colección llena de amigos.', '/img/pokemon/vulpix-1.webp'),
(2, 'Star Wars', 'Disfruta de una saga que sigue agregando personajes a su colección.', '/img/star-wars/baby-yoda-1.webp'),
(3, 'Harry Potter', 'Revive los recuerdos de una saga llena de magia y encanto.', '/img/harry-potter/snape-patronus-1.webp'),
(4, 'Naruto', 'Una de las historias ánime más famosas ahora también coleccionable', '/img/naruto/kakashi_hatake_front.webp');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `product_id` int(11) NOT NULL,
  `product_name` varchar(60) NOT NULL,
  `product_description` varchar(255) NOT NULL,
  `product_price` decimal(10,2) NOT NULL,
  `stock` int(11) DEFAULT NULL,
  `discount` int(11) DEFAULT NULL,
  `product_sku` varchar(30) NOT NULL,
  `dues` int(11) DEFAULT NULL,
  `img_front` varchar(200) NOT NULL,
  `img_back` varchar(200) NOT NULL,
  `create_time` timestamp NOT NULL DEFAULT current_timestamp(),
  `category_id` int(11) NOT NULL,
  `licence_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`product_id`, `product_name`, `product_description`, `product_price`, `stock`, `discount`, `product_sku`, `dues`, `img_front`, `img_back`, `create_time`, `category_id`, `licence_id`) VALUES
(1, 'Baby Yoda Blueball', 'Figura coleccionable de Baby Yoda (Grogu) - The Mandalorian Saga, edición limitada.', 1799.99, 8, 10, 'STW001001', 3, '/img/star-wars/baby-yoda-1.webp', '/img/star-wars/baby-yoda-box.webp', '2023-06-28 02:33:21', 1, 2),
(2, 'Boba Fett Fighter', 'Figura coleccionable de Boba Fett Fighter - The Mandalorian Saga.', 1799.99, 8, 10, 'STW001002', 3, '/img/star-wars/bobbafeth-1.webp', '/img/star-wars/bobbafeth-box.webp', '2023-06-28 02:33:21', 1, 2),
(3, 'Luke Skylwalker & Grogu', 'Figura coleccionable de Luke Skylwalker & Grogu - The Mandalorian Saga.', 1999.99, 8, 10, 'STW001003', 3, '/img/star-wars/luke-1.webp', '/img/star-wars/luke-box.webp', '2023-11-27 18:40:59', 1, 2),
(4, 'Stormtrooper Lightsaber', 'Figura coleccionable de Stormtrooper Lightsaber - Star Wars Saga.', 1799.99, 8, 0, 'STW001004', 3, '/img/star-wars/trooper-1.webp', '/img/star-wars/trooper-box.webp', '2023-09-15 01:10:20', 1, 2),
(5, 'Charmander Smiley', 'Figura coleccionable de Charmander - Pokemon Saga.', 1799.99, 8, 10, 'PKM001001', 3, '/img/pokemon/charmander-1.webp', '/img/pokemon/charmander-box.webp', '2023-06-28 02:33:21', 1, 1),
(6, 'Dragonite Hi!', 'Figura coleccionable de Dragonite - Pokemon Saga.', 1799.99, 8, 10, 'PKM001002', 3, '/img/pokemon/dragonite-1.webp', '/img/pokemon/dragonite-box.webp', '2023-06-28 02:33:21', 1, 1),
(7, 'Pidgeotto Flying', 'Figura coleccionable de Pidgeotto - Pokemon Saga.', 1799.99, 8, 10, 'PKM001003', 3, '/img/pokemon/pidgeotto-1.webp', '/img/pokemon/pidgeotto-box.webp', '2023-09-15 01:10:20', 1, 1),
(8, 'Pikachu Smiley', 'Figura coleccionable de Pikachu - Pokemon Saga.', 1999.99, 8, 10, 'PKM001004', 3, '/img/pokemon/pikachu-1.webp', '/img/pokemon/pikachu-box.webp', '2023-11-27 18:40:59', 1, 1),
(9, 'Vulpix Fancy', 'Figura coleccionable de Vulpix - Pokemon Saga.', 1799.99, 8, 0, 'PKM001005', 3, '/img/pokemon/vulpix-1.webp', '/img/pokemon/vulpix-box.webp', '2023-06-28 02:33:21', 1, 1),
(10, 'Harry Potter & Hegwid', 'Figura coleccionable de Harry Potter & Hegwid - Harry Potter Saga.', 1799.99, 8, 10, 'HPT001001', 3, '/img/harry-potter/harry-1.webp', '/img/harry-potter/harry-box.webp', '2023-06-28 02:33:21', 1, 3),
(11, 'Herminione Ball Dress', 'Figura coleccionable de Herminione - Harry Potter Saga.', 1799.99, 8, 10, 'HPT001002', 3, '/img/harry-potter/hermione-1.webp', '/img/harry-potter/hermione-box.webp', '2023-06-28 02:33:21', 1, 3),
(12, 'Luna Lovegood Lion Mask', 'Figura coleccionable de Luna Lovegood - Harry Potter Saga.', 1999.99, 8, 10, 'HPT001003', 3, '/img/harry-potter/luna-1.webp', '/img/harry-potter/luna-box.webp', '2023-11-27 18:40:59', 1, 3),
(13, 'Snape Patronus', 'Figura coleccionable de Snape Patronus - Harry Potter Saga.', 1799.99, 13, 0, 'HPT001004', 3, '/img/harry-potter/snape-patronus-1.webp', '/img/harry-potter/snape-patronus-box.webp', '2023-09-15 01:10:20', 1, 3),
(23, 'Kakashi Hatake', 'Figura coleccionable de Kakashi Hatake - Naruto Saga.', 1999.99, 10, 0, 'NAR001001', 3, '/img/naruto/kakashi_hatake_front.webp', '/img/naruto/kakashi_hatake_back.webp', '2023-11-27 18:40:59', 1, 4);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `name` varchar(16) NOT NULL,
  `lastname` varchar(80) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(32) NOT NULL,
  `create_time` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `name`, `lastname`, `email`, `password`, `create_time`) VALUES
(1, 'Equipo', 'Dos', 'equipodos@mail.com', 'equipoDosRulez!', '2023-12-12 00:39:12');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `licence`
--
ALTER TABLE `licence`
  ADD PRIMARY KEY (`licence_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `product_category_category_id_fk` (`category_id`),
  ADD KEY `product_licence_licence_id_fk` (`licence_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_category_category_id_fk` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`),
  ADD CONSTRAINT `product_licence_licence_id_fk` FOREIGN KEY (`licence_id`) REFERENCES `licence` (`licence_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
