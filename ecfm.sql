-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Mar 06, 2017 at 05:05 PM
-- Server version: 10.1.16-MariaDB
-- PHP Version: 5.5.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecfm`
--

-- --------------------------------------------------------

--
-- Table structure for table `academics`
--

CREATE TABLE `academics` (
  `B` varchar(20) NOT NULL,
  `Y` varchar(20) NOT NULL,
  `S` varchar(20) NOT NULL,
  `L` varchar(20) NOT NULL,
  `SC` varchar(20) NOT NULL,
  `q1` varchar(20) NOT NULL,
  `q2` varchar(20) NOT NULL,
  `q3` varchar(20) NOT NULL,
  `q4` varchar(20) NOT NULL,
  `q5` varchar(20) NOT NULL,
  `q6` varchar(20) NOT NULL,
  `q7` varchar(20) NOT NULL,
  `q8` varchar(20) NOT NULL,
  `q9` varchar(20) NOT NULL,
  `q10` varchar(20) NOT NULL,
  `q11` varchar(20) NOT NULL,
  `q12` varchar(20) NOT NULL,
  `q13` varchar(20) NOT NULL,
  `q14` varchar(20) NOT NULL,
  `q15` varchar(20) NOT NULL,
  `q16` varchar(20) NOT NULL,
  `q17` varchar(20) NOT NULL,
  `q18` varchar(20) NOT NULL,
  `q19` varchar(20) NOT NULL,
  `q20` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `campus`
--

CREATE TABLE `campus` (
  `q1` varchar(20) NOT NULL,
  `q2` varchar(20) NOT NULL,
  `q3` varchar(20) NOT NULL,
  `q4` varchar(20) NOT NULL,
  `q5` varchar(20) NOT NULL,
  `q6` varchar(20) NOT NULL,
  `q7` varchar(20) NOT NULL,
  `q8` varchar(20) NOT NULL,
  `q9` varchar(20) NOT NULL,
  `q10` varchar(20) NOT NULL,
  `q11` varchar(20) NOT NULL,
  `q12` varchar(20) NOT NULL,
  `q13` varchar(20) NOT NULL,
  `q14` varchar(20) NOT NULL,
  `q15` varchar(20) NOT NULL,
  `q16` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `cultural`
--

CREATE TABLE `cultural` (
  `n` varchar(11) NOT NULL,
  `u` varchar(11) NOT NULL,
  `e` varchar(11) NOT NULL,
  `q1` varchar(11) NOT NULL,
  `q2` varchar(11) NOT NULL,
  `q3` varchar(11) NOT NULL,
  `q4` varchar(11) NOT NULL,
  `q5` varchar(11) NOT NULL,
  `q6` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `event`
--

CREATE TABLE `event` (
  `n` varchar(20) NOT NULL,
  `u` varchar(20) NOT NULL,
  `e` varchar(20) NOT NULL,
  `q1` varchar(20) NOT NULL,
  `q2` varchar(20) NOT NULL,
  `q3` varchar(20) NOT NULL,
  `q4` text NOT NULL,
  `q5` varchar(20) NOT NULL,
  `q6` varchar(20) NOT NULL,
  `q7` varchar(20) NOT NULL,
  `q8` varchar(20) NOT NULL,
  `q9` varchar(20) NOT NULL,
  `q10` varchar(20) NOT NULL,
  `q11` varchar(20) NOT NULL,
  `q12` varchar(20) NOT NULL,
  `q13` varchar(20) NOT NULL,
  `q14` varchar(20) NOT NULL,
  `q15` varchar(20) NOT NULL,
  `sub` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `hostel`
--

CREATE TABLE `hostel` (
  `q1` varchar(20) NOT NULL,
  `q2` varchar(20) NOT NULL,
  `q3` varchar(20) NOT NULL,
  `q4` varchar(20) NOT NULL,
  `q5` varchar(20) NOT NULL,
  `q6` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `library`
--

CREATE TABLE `library` (
  `q1` varchar(20) NOT NULL,
  `q2` varchar(20) NOT NULL,
  `q3` varchar(20) NOT NULL,
  `q4` varchar(20) NOT NULL,
  `q5` varchar(20) NOT NULL,
  `q6` varchar(20) NOT NULL,
  `q7` varchar(20) NOT NULL,
  `q8` varchar(20) NOT NULL,
  `q9` varchar(20) NOT NULL,
  `q10` varchar(20) NOT NULL,
  `q11` varchar(20) NOT NULL,
  `q12` varchar(20) NOT NULL,
  `q13` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `sports`
--

CREATE TABLE `sports` (
  `n` varchar(20) NOT NULL,
  `u` varchar(20) NOT NULL,
  `e` varchar(20) NOT NULL,
  `Y` varchar(20) NOT NULL,
  `b` text NOT NULL,
  `q1` varchar(20) NOT NULL,
  `q2` varchar(20) NOT NULL,
  `q3` varchar(20) NOT NULL,
  `q4` varchar(20) NOT NULL,
  `q5` varchar(20) NOT NULL,
  `q6` varchar(20) NOT NULL,
  `q7` varchar(20) NOT NULL,
  `q8` varchar(20) NOT NULL,
  `q9` varchar(20) NOT NULL,
  `q10` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
