﻿using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;

namespace NFQ_Task.Auth.Model;

public record LoginDto(string UserName, string Password);

public record UserDto(string Id, string UserName, string Email);

public record SuccessfulLoginDto(string AccessToken, string UserName);
public record RegisterUserDto([Required] string UserName, [EmailAddress][Required] string Email, [Required] string Password);