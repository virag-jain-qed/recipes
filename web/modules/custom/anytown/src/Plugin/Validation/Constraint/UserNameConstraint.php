<?php

declare(strict_types=1);

namespace Drupal\anytown\Plugin\Validation\Constraint;

use Drupal\Core\Validation\Attribute\Constraint;
use Drupal\Core\StringTranslation\TranslatableMarkup;
use Symfony\Component\Validator\Constraints\NotEqualTo;

/**
 * Provides a UserNameConstraint constraint.
 *
 * @see https://www.drupal.org/node/2015723.
 */
#[Constraint(
  id: 'AnytownUserNameConstraint',
  label: new TranslatableMarkup('User name cannot be admin', [], ['context' => 'Validation'])
)]
final class UserNameConstraint extends NotEqualTo {

  /**
   * Message to display for invalid username.
   *
   * @var string
   */
  public string $message = 'Invalid user name. Cannot use "admin" as the user name.';

  /**
   * The value to compare.
   *
   * @var string
   */
  public mixed $value = 'admin';

}
