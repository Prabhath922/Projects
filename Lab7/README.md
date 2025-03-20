CSCI3172 Lab-7

**[Optional]** If what is being submitted is an individual Lab or Assignment. Otherwise, include a brief one paragraph description about the project.

* *Date Created*: 17/03/2025
* *Last Modification Date*: 20/02/2025
* *Lab URL*: https://git.cs.dal.ca/vsps/csci3172/-/tree/main/Labs/Lab7
Timbeerlea: 


## Authors

If what is being submitted is an individual Lab or Assignment, you may simply include your name and email address. Otherwise list the members of your group.

Prabhath Sundarapalli- vn386989@dal.ca
this is a personal portolio webpage use to desplay my skills and experiences and projects that i have worked on so far.


## Built With

<!--- Provide a list of the frameworks used to build this application, your list should include the name of the framework used, the url where the framework is available for download and what the framework was used for, see the example below --->

* bootstrao(https://getbootstrap.com)- css opensource framework used to make cleaner webpages
* React, Vite
* HTML
* CSS
* JavaScript



## Sources Used

This. code is an extension of the Lecture activities and uses methods and classes mentioned in class.

Source: 2024(geeksforgeeks.com) https://www.geeksforgeeks.org/how-to-implement-search-filter-functionality-in-reactjs/
file:SkillsSearch.jsx
code used from source 
 // const [products, setProducts] = useState(productList);
    const [searchVal, setSearchVal] = useState("");
    function handleSearchClick() {
        if (searchVal === "") { setProducts(productList); return; }
        const filterBySearch = productList.filter((item) => {
            if (item.toLowerCase()
                .includes(searchVal.toLowerCase())) { return item; }
        })
        setProducts(filterBySearch);
    } //

    code lines in current code :lines 5-14

     // const [skills, setskills] = useState(skillsArray);
    const [searchVal, setSearchVal] = useState("");
    function handleSearchClick() {
        if (searchVal === "") { setskills(skillsArray); return; }
        const filterBySearch = skillsArray.filter((item) => {
            if (item.toLowerCase()
                .includes(searchVal.toLowerCase())) { return item; }
        })
        setskills(filterBySearch);
    } //

    image credits : https://www.flaticon.com/free-icon/webpage_5681787
learning resources used :
https://www.geeksforgeeks.org/reactjs-router/?ref=shm

https://www.geeksforgeeks.org/react-bootstrap/?ref=shm

https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.geeksforgeeks.org/how-to-use-styles-in-reactjs/&ved=2ahUKEwjkwavRkoqMAxWjkokEHSrjLloQFnoECBAQAQ&usg=AOvVaw3F4qLcn-iLuVQ5SYBv2Cci

https://react.dev/reference/react/useState
## Acknowledgments

* Lab TA's were of great help and helped me during all stages of this lab.Would like to thank Hardison Wang for all the extra assistance and help

