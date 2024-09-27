-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 13, 2024 at 06:51 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `foodblog`
--

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `PID` int(11) NOT NULL,
  `UID` int(11) NOT NULL,
  `Title` text NOT NULL,
  `Subtitle` text NOT NULL,
  `Body` text NOT NULL,
  `ImgUrl` text NOT NULL,
  `Rating` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`PID`, `UID`, `Title`, `Subtitle`, `Body`, `ImgUrl`, `Rating`) VALUES
(6, 4, 'hfyuaw', 'agyuwgf', 'fayugwfyua', 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-craig-122861-376464.jpg&fm=jpg', 3),
(7, 4, 'dwuahd', 'iudhi', 'uhd', 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-craig-122861-376464.jpg&fm=jpg', 3),
(8, 4, 'wfba', 'bf', 'byu', 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-craig-122861-376464.jpg&fm=jpg', 0),
(9, 4, 'dawf', 'fafw', 'fawf', '          console.error(\'Error:\', res.status, res.statusText);', 4),
(10, 4, 'wfawf', 'awf', 'awf', '          console.error(\'Error:\', res.status, res.statusText);', 3),
(11, 4, 'fwayfu', 'gyawuwgfyu', 'fauyfgwa', '        console.log(\'res:\', res[0].message);', 4),
(12, 4, 'dawf', 'awf', 'fwaf', '        console.log(\'res:\', res[0].message);', 3),
(13, 4, 'fawf', 'awf', 'aafa', 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-craig-122861-376464.jpg&fm=jpg', 5),
(14, 4, 'awf', 'fawf', 'fwafawf', 'fawwfawf', 4),
(15, 4, 'wfhai', 'fuhawifuh', 'uifwahifuh', 'uifhaawf', 3),
(16, 4, 'wfhai', 'fuhawifuh', 'uifwahifuh', 'uifhaawf', 3),
(17, 1, 'awhui', 'hfuiawhfui', 'hfuiawwhfui', 'fhuiawh', 3);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `UID` int(11) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`UID`, `Email`, `Password`) VALUES
(1, 'max@gmail.com', '123'),
(2, 'max@gmail.com', '123'),
(3, 'max@gmail.com', ''),
(4, 'jack@gmail.com', '123'),
(5, 'maxy@gmail.com', '123'),
(6, 'maxy@gmail.com', '123');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`PID`),
  ADD KEY `UID` (`UID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`UID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `PID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `UID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `UID` FOREIGN KEY (`UID`) REFERENCES `users` (`UID`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
