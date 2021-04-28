# Full Stack Open

## Part 11 - CI/CD

### Exercise 11.1

Besides JavaScript/TypeScript we will consider a back-end using Python and Django.

#### Python testing
For testing the Python code, We will use **pytest** as it is a well-known framework for testing python code. As it says, pytest makes it easy to write small tests and scales to support complex functional testing for applications and libraries.

#### Python linting
To ensure code quality and make the code easy to maintain and extend, we will use a linter the keep our style guide and use a pattern for the project. The linting tool will be **Flake8** since it is well-known and supports both Logical and Stylistic linting. Flake8 will help us to make sure our code is in conformation with our defined conventions, it has no errors and no dangerous code patterns.

#### Python bulding
As the building tool of the project we are going to use PyBuild.

#### CI setup alternatives
Besides Jenkins and Github actions, we could opt for Travis CI or CircleCI.
While Travis isn't Open Source, it takes less time to configure than Jenkins. Circle Ci could be a good choice since it can be server or cloud-based, and it can start at low cost.

#### Self-hosted vs Cloud-based
A self-hosted Ci solution can give us more control of what we need and it also means we can make it work for exactly what we need. But we will need to have a good understanding of the tools we choose, we will need to install, configure and update them. This can lead to a big time impact.
A cloud-based solution will give us less control, but also we don't need to be much worried about it, since the cloud company will try to make easier for us to use the solution. To make the decision it is important to understand the project, the size of the team, and the project's needs.
