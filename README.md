# Phonebook
A simple phone book with CRUD operation using AngularJS

I have created a simple ASP.NET Web Application to run this Phone Book Angular App.

# How to deploy & run the Application in IIS

1. Open the solution in Visual Studio.
2. Right click the Solution and click publish.
3. Publish the files in a particular folder say x.
4. Open IIS.
5. Create a new web site and give the site name, physical path (x over here) and a valid port.
6. Click Ok to save the web site.
7. Right click the site created and go to Manage Website -> Browse to open the running application.

# Alternate Solution to view running application

In case if you are not able to deploy or run the application, you can find the plunker for the app at below given location:

https://plnkr.co/edit/41IPSqfYdxMwxru8?open=lib%2Fscript.js

# Note

The app created is a very basic CRUD app and it does not involve any Web API calls as well as no multiple views. Henceforth the application structure does not have MVC folder structure but in real world application the front end as well as backend both contains MVC structure in Angular project.

# Scope

The application can be further optimised to create proper directives and valiations and MVC structure going ahead.
