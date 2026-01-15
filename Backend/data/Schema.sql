-- Clubs Table
CREATE TABLE Clubs (
    ClubID INT PRIMARY KEY AUTO_INCREMENT,
    ClubName VARCHAR(100) NOT NULL UNIQUE
);

-- Tags Table
CREATE TABLE Tags (
    TagID INT PRIMARY KEY AUTO_INCREMENT,
    Tag VARCHAR(50) NOT NULL UNIQUE
);

-- Projects Table
CREATE TABLE Projects (
    ProjectID INT PRIMARY KEY AUTO_INCREMENT,
    Title VARCHAR(255) NOT NULL,
    Duration INT CHECK (Duration > 0),
    ClubID INT NOT NULL,
    Description TEXT,
    Difficulty ENUM('Beginner', 'Intermediate', 'Advanced'),
    Objective TEXT,
    Methodology TEXT,
    CoverImage VARCHAR(2083), -- accommodates full URL length
    FutureProspects TEXT,
    FOREIGN KEY (ClubID) REFERENCES Clubs(ClubID) ON DELETE CASCADE ON UPDATE CASCADE
);

-- ProjectTags Junction Table (Many-to-Many)
CREATE TABLE ProjectTags (
    ProjectID INT,
    TagID INT,
    PRIMARY KEY (ProjectID, TagID),
    FOREIGN KEY (ProjectID) REFERENCES Projects(ProjectID) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (TagID) REFERENCES Tags(TagID) ON DELETE CASCADE ON UPDATE CASCADE
);

-- WeekWisePlan Table
CREATE TABLE WeekWisePlan (
    WeekID INT PRIMARY KEY AUTO_INCREMENT,
    ProjectID INT NOT NULL,
    Week INT CHECK (Week > 0),
    Title VARCHAR(255),
    Plan TEXT,
    Resources JSON, -- Assuming MySQL 5.7+ or 8.x
    FOREIGN KEY (ProjectID) REFERENCES Projects(ProjectID) ON DELETE CASCADE ON UPDATE CASCADE
);
